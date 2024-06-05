import DataPagination from '../src';
import data from './cases.json';
import data6 from './cases6.json';

describe('api.basic', () => {
  test('Normal single value case', () => {
    const dp = new DataPagination(data);
    const totalPage = dp.totalPage;
    const firstPageData = dp.page(1);
    const lastPageData = dp.page(dp.totalPage);
    const pageData = dp.page(2);

    expect(totalPage).toBe(3);
    expect(dp.total).toBe(data.length);
    expect(firstPageData).toEqual(data.slice(0, 10));
    expect(lastPageData).toEqual(data.slice(20, 30));
    expect(pageData).toEqual(data.slice(10, 20));
  });

  test('api first/last/prev/next', () => {
    const dp = new DataPagination(data);
    dp.first();
    expect(dp.items).toEqual(data.slice(0, 10));

    dp.last();
    expect(dp.items).toEqual(data.slice(20, 30));

    dp.prev();
    expect(dp.items).toEqual(data.slice(10, 20));

    dp.next();
    expect(dp.items).toEqual(data.slice(20, 30));
  });

  test('unexpected input', () => {
    const dp = new DataPagination(data);
    expect(dp.page(0)).toEqual([])
    expect(dp.page(-1)).toEqual([])
    expect(dp.page(1.5)).toEqual([])
    expect(dp.page(100)).toEqual([])
  });

  // api set data
  test('api setData', () => {
    const dp = new DataPagination(data, { pageSize: 5 });
    dp.setData(data6);
    expect(dp.total).toBe(data6.length);
    expect(dp.totalPage).toBe(2);
    expect(dp.items).toEqual(data6.slice(0, 5));
  });

  // api set options
  test('api setOptions', () => {
    // data: 26 items
    // data6: 6 items
    const dp = new DataPagination(data, { pageSize: 5 });
    expect(dp.total).toBe(26);
    expect(dp.totalPage).toBe(6);
    expect(dp.items).toEqual(data.slice(0, 5));

    dp.setOptions({ pageSize: 10 });
    expect(dp.total).toBe(26);
    expect(dp.totalPage).toBe(3);
    expect(dp.items).toEqual(data.slice(0, 10));

    dp.setOptions({ pageSize: 20 });
    expect(dp.total).toBe(26);
    expect(dp.totalPage).toBe(2);
    expect(dp.items).toEqual(data.slice(0, 20));
  })
});
