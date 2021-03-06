import * as moment_import from 'moment';
const moment = moment_import; // workaround for imports
import { RRDriver } from '../interfaces/rr-driver';
import { RRRequest } from '../interfaces/rr-request';
import { RRExtraOptions } from '../interfaces/rr-extra-options';
import { Observable, PartialObserver } from 'rxjs';
import { merge, isEmpty, isArray } from 'lodash';

import { RRConnector } from '../interfaces/rr-connector';
import { RROptions } from '../interfaces/rr-options';
import { RRResponse } from '../interfaces/rr-response';
import { RRHooks } from '../hooks/hooks';
import { map } from 'rxjs/operators';

export class RRFirebaseDriver extends RRHooks /*implements RRDriver*/ {
  //
  // default params
  collection: string;
  timestamp: boolean = true;

  //
  // connectors
  connector: RRConnector = {
    firebase: {}
  };

  //
  // for unit test
  _observer: PartialObserver<any>;

  constructor(options: RROptions) {
    super(options);
    merge(this, options);
  }
  public find(
    request: RRRequest,
    extraOptions?: RRExtraOptions
  ): Observable<RRResponse> {
    return new Observable((observer: PartialObserver<any>) => {
      //
      // set default options
      const _extraOptions: RRExtraOptions = {};
      merge(_extraOptions, extraOptions);

      //
      // handlers
      let network: any, hook: any;

      //
      // define an unique key
      let key: string;

      //
      // for unit testing
      this._observer = observer;

      //
      // run exceptions for firestore
      if (!this.collection) throw new Error('missing collection');
      if (isEmpty(this.connector.firebase))
        throw new Error('missing firebase connector');

      //
      // define adapter
      const firebase: any = this.connector.firebase
        .database()
        .ref(`${this.collection}/${_extraOptions.ref}`);

      //
      // @todo add complete api
      // https://firebase.google.com/docs/reference/js/firebase.database.Query

      //
      // set an unique identifier
      key =
        _extraOptions.key ||
        `${this.collection}/${_extraOptions.ref}/${JSON.stringify(request)}`;

      //
      // network handle
      const transformNetwork: any =
        extraOptions.transformNetwork &&
        typeof extraOptions.transformNetwork === 'function'
          ? extraOptions.transformNetwork
          : (data: RRResponse) => data;
      network = () => {
        //
        // fire in the hole
        firebase.once(
          'value',
          async (snapshot: any) => {
            const val: any = snapshot.val();

            //
            // format data
            const data: any[] = [];

            if (typeof val !== 'object') {
              data[0] = snapshot.val();
            } else {
              for (const k in val) {
                data.push(val[k]);
              }
            }

            //
            // define standard response
            const response: RRResponse = {
              data: data,
              response: {
                key: snapshot.key
              }
            };

            //
            // get after hook
            hook = this.hasHook('find.after');

            //
            // check availability
            if (hook) {
              //
              // run client hook
              hook(key, response, observer, _extraOptions);
            } else {
              //
              // success callback
              observer.next(transformNetwork(response));
              observer.complete();
            }
          },
          err => {
            observer.error(err);
            observer.complete();
          }
        );
      };

      //
      // get before hook
      hook = this.hasHook('find.before');

      //
      // check availability
      if (!_extraOptions.useNetwork && hook) {
        //
        // run client hook
        hook(key, observer, _extraOptions).then(canRequest => {
          //
          // http.get.before should return a boolean
          if (canRequest) network();
        });
      } else {
        //
        // otherwise
        network();
      }
    });
  }

  public findOne(
    request: RRRequest,
    extraOptions?: RRExtraOptions
  ): Observable<RRResponse> {
    return this.find(request, extraOptions).pipe(
      map((r: RRResponse) => {
        return !isEmpty(r.data)
          ? <RRResponse>{
              data: r.data[0],
              response: r.response
            }
          : r[0];
      })
    );
  }
}
