# jinqu-array-extensions - Jinqu Array Prototype Extensions

[![Build Status](https://travis-ci.org/jin-qu/jinqu-array-extensions.svg?branch=master)](https://travis-ci.org/jin-qu/jinqu-array-extensions)
[![Coverage Status](https://coveralls.io/repos/github/jin-qu/jinqu-array-extensions/badge.svg?branch=master)](https://coveralls.io/github/jin-qu/jinqu-array-extensions?branch=master)
[![npm version](https://badge.fury.io/js/.svg)](https://badge.fury.io/js/jinqu-array-extensions)
<a href="https://snyk.io/test/npm/jinqu-array-extensions"><img src="https://snyk.io/test/npm/jinqu-array-extensions/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/npm/jinqu-array-extensions" style="max-width:100%;"></a>

Jinqu no longer injects methods into Array Prototype, this repository will provide the functionality.

## Installation

```shell
npm i jinqu-array-extensions
```

## Usage

You only need to import the package, Jinqu query methods will be attached to Array Prototype.

```typescript
import 'jinqu-array-extensions';

const arr = [1, 2, 3];
// arr.asQueryable() is not needed.
const first = arr.first();

// if you don't want to use extension methods
// and think "asQueryable" is too long, you can use "q"
const last = arr.q().last();
```

## License

jinqu-array-extensions is under the [MIT License](LICENSE).
