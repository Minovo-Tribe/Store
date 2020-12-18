import { SortingProduct } from '../../model/shop.model';
export const sortingList = [
  new SortingProduct('Popularity', 'rating', 'DSC'),
  new SortingProduct('Price: High to Low', 'price', 'DSC'),
  new SortingProduct('Price: Low to High', 'price', 'ASC'),
];
