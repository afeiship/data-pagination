export interface PaginationOptions {
  pageSize?: number;
  page?: number;
  onChange?: (page: number, pageSize: number) => void;
}

const defaultOptions: PaginationOptions = {
  pageSize: 10,
  page: 1,
};

class DataPagination {
  private data: any[];
  private options: PaginationOptions;
  private currentPage: number;

  private isValidatePage(page: number) {
    const isValidNumber = Math.floor(page) === page;
    const isInRange = page >= 1 && page <= this.totalPage;
    return isValidNumber && isInRange;
  }

  constructor(inData: any[], options?: PaginationOptions) {
    this.data = inData;
    this.options = { ...defaultOptions, ...options };
    this.currentPage = this.options.page!;
  }

  setData(inData: any[]) {
    this.data = inData;
    this.currentPage = 1;
  }

  setOptions(options: PaginationOptions) {
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
    if (!this.isValidatePage(page)) return [];
    const start = (page - 1) * this.options.pageSize!;
    const end = start + this.options.pageSize!;
    return this.data.slice(start, end);
  }

  to(page: number) {
    if (!this.isValidatePage(page)) return;
    this.currentPage = page;
    this.options.onChange?.(page, this.options.pageSize!);
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
