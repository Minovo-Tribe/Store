import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { LoadingService } from '../service/loading.service';
import { ProductService } from '../service/product.service';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> | Promise<User> | User {
    return this.userService.setUser().then(() => {
      return this.userService.user;
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<any> {
  constructor(
    private productService: ProductService,
    private loading: LoadingService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> {
    this.loading.isProductLoading = true;
    this.loading.isLoading = true;
    const gender = route.paramMap.get('gender');
    const sort = 'rating';
    this.loading.isLoadingProductMen = gender == 'Men';
    this.loading.isLoadingProductWomen = gender == 'Women';
    return this.productService
      .getProducts({ gender, sort })
      .then((res) => {
        this.loading.isProductLoading = false;
        this.loading.isLoading = false;
        this.loading.isLoadingProductMen = false;
        this.loading.isLoadingProductWomen = false;
        return res;
      })
      .catch((err) => {
        console.log(err);
        this.loading.isLoading = false;
        this.loading.isProductLoading = false;
        this.loading.isLoadingProductMen = false;
        this.loading.isLoadingProductWomen = false;
      });
  }
}
