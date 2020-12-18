import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isProductLoading: boolean;
  isLoading: boolean;
  isLoadingProductMen: boolean;
  isLoadingProductWomen: boolean;

  constructor() {}
}
