export interface Filters {
  categories: {
    activeList: Array<Category>;
    count: number;
    total: Array<Category>;
  };
  brands: {
    activeList: Array<Brand>;
    count: number;
    total: Array<Brand>;
  };
}

export class Category {
  _id: string;
  category: string;
  gender: string;
  isActive: boolean;
}

export class Brand {
  _id: string;
  brand: string;
  gender: string;
  category: string;
  isActive: boolean;
}

export interface ProductQuery {
  gender?: string;
  category?: string[];
  brand?: string[];
  sort?: string;
  order?: string;
}

export class SortingProduct {
  name: string;
  value: string;
  order: 'ASC' | 'DSC';

  constructor(name, value, order) {
    this.name = name;
    this.value = value;
    this.order = order;
  }
}
