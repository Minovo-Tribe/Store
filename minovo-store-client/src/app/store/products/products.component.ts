import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { sortingList } from './sorting-list.const';
import {
  Brand,
  Category,
  Filters,
  ProductQuery,
  SortingProduct,
} from 'src/app/model/shop.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products;
  filters: Filters;
  productCount: number;
  moreCategories: boolean;
  moreBrands: boolean;
  gender: string;
  selectedCategories: Array<Category>;
  selectedBrands: Array<Brand>;
  selectedSort: SortingProduct;
  sortingList: SortingProduct[] = sortingList;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    public loading: LoadingService,
    private router: Router
  ) {
    this.route.params.subscribe((res) => {
      this.gender = res.gender;
      this.selectedSort = sortingList[0];
      this.selectedBrands = [];
      this.selectedCategories = [];
      this.moreCategories = false;
      this.moreBrands = false;
    });
    this.route.data.subscribe((routerData) => {
      this.initData(routerData.products);
    });
  }

  ngOnInit(): void {}

  private initData(data) {
    this.products = data['products'];
    this.filters = this.sanitizeFilter(data['filters']);
    this.productCount = data['count'];
    this.filters.categories.activeList.forEach((c) => {
      if (!!this.selectedCategories.find((sc) => sc._id == c._id))
        c.isActive = true;
    });
    this.filters.brands.activeList.forEach((c) => {
      if (!!this.selectedBrands.find((sc) => sc._id == c._id))
        c.isActive = true;
    });
    this.loading.isProductLoading = false;
  }

  updateSorting(item) {
    this.selectedSort = item;
    this.updateProduct();
  }

  private sanitizeFilter(data): Filters {
    const categories = data?.categories?.slice(0, 7);
    const brands = data?.brands?.slice(0, 15 - categories.length);
    this.moreCategories = data?.categories.length > categories.length;
    this.moreBrands = data?.brands.length > brands.length;
    return {
      categories: {
        activeList: categories,
        count: data?.categories?.length,
        total: data?.categories,
      },
      brands: {
        activeList: brands,
        count: data?.brands?.length,
        total: data?.brands,
      },
    };
  }

  updateCategories(item: Category) {
    if (item.isActive) {
      this.selectedCategories.push(item);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (c) => c._id !== item._id
      );
    }
    this.updateProduct();
  }

  updateBrands(item: Brand) {
    if (item.isActive) {
      this.selectedBrands.push(item);
    } else {
      this.selectedBrands = this.selectedBrands.filter(
        (c) => c._id !== item._id
      );
    }
    this.updateProduct();
  }

  updateProduct() {
    let self = this;
    self.loading.isProductLoading = true;
    const query = {
      category: self.selectedCategories.map((c) => c.category),
      brand: self.selectedBrands.map((c) => c.brand),
      gender: self.gender,
      sort: self.selectedSort.value,
      order: self.selectedSort.order,
    };
    this.productService.getProducts(query).then((res) => {
      this.initData(res);
    });
  }

  clearCategories() {
    this.selectedCategories = [];
    this.updateProduct();
  }
  clearBrands() {
    this.selectedBrands = [];
    this.updateProduct();
  }

  openProduct(item) {
    this.router.navigate(['product', item._id]);
  }
}
