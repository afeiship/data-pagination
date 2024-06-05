// const items = [/*data*/];
// const pagination = new Pagination(items, {
//   pageSize: 10,
//   page: 1,
//   total: items.length,
//   onChange: (page, pageSize) => {
//     console.log(page, pageSize);
//   }
// });
//
// // to first:
// pagination.to(1);
// // to last
// pagination.to(pagination.totalPage);
// // to `num` page
// pagination.to(num);
//
// // to next page
// pagination.next();
// // to prev page
// pagination.prev();

export interface PaginationOptions {
  pageSize?: number;
  page?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
}

const defaultOptions: PaginationOptions = {
  pageSize: 10,
  page: 1,
  total: 0,
};

class DataPagination {
  private data: any[];
  private options: PaginationOptions;
  private currentPage: number;

  constructor(inData: any[], options?: PaginationOptions) {
    this.data = inData;
    this.options = { ...defaultOptions, ...options };
    this.currentPage = this.options.page!;
  }

  get total() {
    return this.data.length;
  }

  get totalPage() {
    return Math.ceil(this.total / this.options.pageSize!);
  }

  get items() {
    return this.page(this.currentPage);
  }

  page(page: number) {
    const start = (page - 1) * this.options.pageSize!;
    const end = start + this.options.pageSize!;
    return this.data.slice(start, end);
  }

  to(page: number) {
    if (page < 1 || page > this.totalPage) return;
    this.currentPage = page;
    this.options.onChange && this.options.onChange(page, this.options.pageSize!);
  }

  next() {
    this.to(this.currentPage + 1);
  }

  prev() {
    this.to(this.currentPage - 1);
  }

  first() {
    this.to(1);
  }

  last() {
    this.to(this.totalPage);
  }
}


export default DataPagination;
