# @jin-qu/array-extensions - Jinqu Array Prototype Extensions

[![Build and Test](https://github.com/jin-qu/jinqu-array-extensions/actions/workflows/build.yml/badge.svg)](https://github.com/jin-qu/jinqu-array-extensions/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/jin-qu/jinqu-array-extensions/graph/badge.svg?token=QbIm6H1Ucc)](https://codecov.io/gh/jin-qu/jinqu-array-extensions)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/08790e72c34e4f44b2f6a04740252780)](https://app.codacy.com/gh/jin-qu/jinqu-array-extensions/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
<a href="https://snyk.io/test/npm/@jin-qu/array-extensions"><img src="https://snyk.io/test/npm/@jin-qu/array-extensions/badge.svg" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/npm/@jin-qu/array-extensions" style="max-width:100%;"></a>

[![npm version](https://img.shields.io/npm/v/@jin-qu/array-extensions)](https://www.npmjs.com/package/@jin-qu/array-extensions)
[![npm downloads](https://img.shields.io/npm/dm/@jin-qu/array-extensions.svg)](https://www.npmjs.com/package/@jin-qu/array-extensions)

[![GitHub issues](https://img.shields.io/github/issues/jin-qu/jinqu-array-extensions.svg)](https://github.com/jin-qu/jinqu-array-extensions/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/jin-qu/jinqu-array-extensions/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/jin-qu/jinqu-array-extensions.svg?style=social&label=Star)](https://github.com/jin-qu/jinqu-array-extensions)
[![GitHub forks](https://img.shields.io/github/forks/jin-qu/jinqu-array-extensions.svg?style=social&label=Fork)](https://github.com/jin-qu/jinqu-array-extensions)

Jinqu no longer injects methods into Array Prototype, this repository will provide the functionality.

## Installation

```shell
npm i @jin-qu/array-extensions
```

## Usage

You only need to import the package, Jinqu query methods will be attached to Array Prototype.

```typescript
import '@jin-qu/array-extensions';

const arr = [1, 2, 3];
// arr.asQueryable() is not needed.
const first = arr.first();

// if you don't want to use extension methods
// and think "asQueryable" is too long, you can use "q"
const last = arr.q().last();
```

## License

jinqu-array-extensions is under the [MIT License](LICENSE).
