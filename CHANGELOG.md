# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.2.5"></a>
## [1.2.5](https://github.com/ionfire/reactive-record/compare/v1.2.4...v1.2.5) (2019-01-04)


### Bug Fixes

* **rr:** findOne was returning wrong answer when in use with transformNetwork ([0a3d73f](https://github.com/ionfire/reactive-record/commit/0a3d73f))



<a name="1.2.4"></a>
## [1.2.4](https://github.com/ionfire/reactive-record/compare/v1.2.3...v1.2.4) (2018-11-23)


### Bug Fixes

* findOne empty return ([0189861](https://github.com/ionfire/reactive-record/commit/0189861))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/ionfire/reactive-record/compare/v1.2.2...v1.2.3) (2018-11-23)


### Bug Fixes

* where should accept boolean value ([7182831](https://github.com/ionfire/reactive-record/commit/7182831))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/ionfire/reactive-record/compare/v1.2.1...v1.2.2) (2018-11-23)


### Bug Fixes

* query should accept array as well ([da7b263](https://github.com/ionfire/reactive-record/commit/da7b263))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/ionfire/reactive-record/compare/v1.2.0...v1.2.1) (2018-11-22)


### Features

* add firebase driver ([4162bd2](https://github.com/ionfire/reactive-record/commit/4162bd2))



<a name="1.2.0"></a>

# [1.2.0](https://github.com/ionfire/reactive-record/compare/v1.1.0...v1.2.0) (2018-11-21)

### Deprecation

- improve RR api by removing all unnecessary params like request, extraOptions and driver from methods. Now all the things should be set earlier via chaining. Also ensure that state is being reseted after calls. ([1aefdab](https://github.com/ionfire/reactive-record/commit/1aefdab))

<a name="1.1.0"></a>

# [1.1.0](https://github.com/ionfire/reactive-record/compare/v1.0.3...v1.1.0) (2018-11-20)

### Bug Fixes

- **firestore:** deprecation. now the `on` method receives only two params. the other things is adjusted using the chain ([de50531](https://github.com/ionfire/reactive-record/commit/de50531))

<a name="1.0.3"></a>

## [1.0.3](https://github.com/ionfire/reactive-record/compare/v1.0.2...v1.0.3) (2018-11-17)

### Bug Fixes

- **api:** race conditions ([4c52b5f](https://github.com/ionfire/reactive-record/commit/4c52b5f))

<a name="1.0.2"></a>

## [1.0.2](https://github.com/ionfire/reactive-record/compare/v1.0.1...v1.0.2) (2018-11-17)

### Bug Fixes

- set cache ([1d09a7e](https://github.com/ionfire/reactive-record/commit/1d09a7e))

<a name="1.0.1"></a>

## [1.0.1](https://github.com/ionfire/reactive-record/compare/v1.0.0-beta.3...v1.0.1) (2018-11-15)

### Bug Fixes

- **firestore:** add transformNetwork ([6e38fdf](https://github.com/ionfire/reactive-record/commit/6e38fdf))

### Features

- add saveNetwork and replace forceNetwork and forceCache to useNetwork and useCache instead ([e8c8036](https://github.com/ionfire/reactive-record/commit/e8c8036))
- add saveNetwork and replace forceNetwork and forceCache to useNetwork and useCache instead ([231cd7b](https://github.com/ionfire/reactive-record/commit/231cd7b))

<a name="1.0.0-beta.3"></a>

# [1.0.0-beta.3](https://github.com/ionfire/reactive-record/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2018-11-13)

### Bug Fixes

- improve rr api ([02e8ecb](https://github.com/ionfire/reactive-record/commit/02e8ecb))
- transform response ([e0ca2c7](https://github.com/ionfire/reactive-record/commit/e0ca2c7))

<a name="1.0.0-beta.2"></a>

# [1.0.0-beta.2](https://github.com/ionfire/reactive-record/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2018-11-08)

### Bug Fixes

- code cleaning and refact ClientSetup to RRClientPlugin ([e9c4766](https://github.com/ionfire/reactive-record/commit/e9c4766))
- rename RRClientPlugin to RRCachePlugin as it makes more sense ([6a1e122](https://github.com/ionfire/reactive-record/commit/6a1e122))
- rr find ([263b35c](https://github.com/ionfire/reactive-record/commit/263b35c))

### Features

- add cache plugin strategy ([8b55566](https://github.com/ionfire/reactive-record/commit/8b55566))

<a name="1.0.0-beta.1"></a>

# [1.0.0-beta.1](https://github.com/ionfire/reactive-record/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2018-11-05)

### Features

- add driver abstraction for firestore and a chainable public api for RR ([6e962f2](https://github.com/ionfire/reactive-record/commit/6e962f2))

<a name="0.0.1-alpha.4"></a>

## [0.0.1-alpha.4](https://github.com/ionfire/reactive-record/compare/v0.0.1-alpha.3...v0.0.1-alpha.4) (2018-11-05)

### Features

- add request size ([ee49405](https://github.com/ionfire/reactive-record/commit/ee49405))

<a name="0.0.1-alpha.3"></a>

## [0.0.1-alpha.3](https://github.com/ionfire/reactive-record/compare/v0.0.1-alpha.2...v0.0.1-alpha.3) (2018-10-30)

### Bug Fixes

- performance issue related with cache ([d116506](https://github.com/ionfire/reactive-record/commit/d116506))
- **rr:** remove updated_at from set ([a8804dc](https://github.com/ionfire/reactive-record/commit/a8804dc))

<a name="0.0.1-alpha.2"></a>

## [0.0.1-alpha.2](https://github.com/ionfire/reactive-record/compare/v0.0.1-alpha.1...v0.0.1-alpha.2) (2018-10-12)

### Bug Fixes

- **client:** omit from cache some network response attributes ([382c4a0](https://github.com/ionfire/reactive-record/commit/382c4a0))
- make elastic query more flexible until add a better typing ([df52724](https://github.com/ionfire/reactive-record/commit/df52724))

### Features

- add patch method ([5d440fc](https://github.com/ionfire/reactive-record/commit/5d440fc))

<a name="0.0.1-alpha.1"></a>

## [0.0.1-alpha.1](https://github.com/ionfire/reactive-record/compare/v0.0.1-alpha.0...v0.0.1-alpha.1) (2018-10-10)

### Bug Fixes

- **hook:** response type ([4961315](https://github.com/ionfire/reactive-record/commit/4961315))
- **readme:** add missing links ([f5dda37](https://github.com/ionfire/reactive-record/commit/f5dda37))

### Features

- **readme:** add changelog ([07296eb](https://github.com/ionfire/reactive-record/commit/07296eb))
- **readme:** add methods and more info ([be8be9e](https://github.com/ionfire/reactive-record/commit/be8be9e))

<a name="0.0.1-alpha.0"></a>

## 0.0.1-alpha.0 (2018-10-07)

### Features

- add rr lib 1a773e5
