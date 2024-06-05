# data-pagination
> Raw data(items) pagination.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/data-pagination
```

## usage
```js
import DataPagination from '@jswork/data-pagination';

const dp = new DataPagination([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// to first page
dp.first();

// to last page
dp.last();

// to next page
dp.next();

// to prev page
dp.prev();

// to page 2
dp.goto(2);
```

## license
Code released under [the MIT license](https://github.com/afeiship/data-pagination/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/data-pagination
[version-url]: https://npmjs.org/package/@jswork/data-pagination

[license-image]: https://img.shields.io/npm/l/@jswork/data-pagination
[license-url]: https://github.com/afeiship/data-pagination/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/data-pagination
[size-url]: https://github.com/afeiship/data-pagination/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/data-pagination
[download-url]: https://www.npmjs.com/package/@jswork/data-pagination
