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
  public data: any[];
  public options: PaginationOptions;
  public currentPage: number;

  constructor(inData: any[], options?: PaginationOptions) {
    this.data = inData;
    this.options = { ...defaultOptions, ...options };
    this.currentPage = this.options.page!;
  }

  get totalPage() {
    return Math.ceil(this.data.length / this.options.pageSize!);
  }

  get items() {
    return this.page(this.currentPage);
  }

  page(page: number) {
    if(!this.isValidatePage(page)) return [];
    const start = (page - 1) * this.options.pageSize!;
    const end = start + this.options.pageSize!;
    return this.data.slice(start, end);
  }

  to(page: number) {
    if(!this.isValidatePage(page)) return;
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

  private isValidatePage(page: number) {
    const isValidNumber = Math.floor(page) === page;
    const isInRange = page >= 1 && page <= this.totalPage;
    return isValidNumber && isInRange;
  }
}


export default DataPagination;
