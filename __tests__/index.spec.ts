import DataPagination from '../src';
import data from './cases.json';

describe('api.basic', () => {
  test('Normal single value case', () => {
    const dp = new DataPagination(data);
    const totalPage = dp.totalPage;
    const firstPageData = dp.page(1);
    const lastPageData = dp.page(dp.totalPage);
    const pageData = dp.page(2);

    expect(totalPage).toBe(3);
    expect(firstPageData).toEqual(data.slice(0, 10));
    expect(lastPageData).toEqual(data.slice(20, 30));
    expect(pageData).toEqual(data.slice(10, 20));
  });
});
