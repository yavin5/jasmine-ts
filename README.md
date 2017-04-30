# jasmine-ts

A simplification for running [jasmine](https://www.npmjs.com/package/jasmine) with
[ts-node](https://github.com/TypeStrong/ts-node).

## Installation

```
npm install git+https://github.com/yavin5/jasmine-ts --dev-save
```

## Usage

* In your `package.json` file create a test script:

  ```json
  {
    "scripts": {
      "test": "jasmine-ts 'path/to/specs/**/*.spec.ts'"
    }
  }
  ```
* Initialize jasmine

  ```
  node_modules/.bin/jasmine-ts init
  ```

  Note: This module enables the configuration support of
  reporters. For example, if you want to use the
  [jasmine-spec-reporter](https://github.com/bcaudan/jasmine-spec-reporter),
  you can add a reporters array to the `jasmine.json`
  file like this:

  ```json
  {
    "reporters": [
      {
        "name": "jasmine-spec-reporter#SpecReporter",
        "options": {
          "displayStacktrace": "all"
        }
      }
    ]
  }
  ```
  If the reporters are not the default export of the module,
  you can reference another export by using the `#` separator.

* Run the tests

  ```
  npm test
  ```
