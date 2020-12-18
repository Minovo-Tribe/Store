import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsResolver, UserResolver } from '../util/data-resolver';
import { AddProductComponent } from './add-product/add-product.component';
import { DealsComponent } from './deals/deals.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: AddProductComponent },
  {
    path: 'products/:gender',
    resolve: { products: ProductsResolver },
    component: ProductsComponent,
  },
  {
    path: 'product/:id',
    component: ProductViewComponent,
  },
  {
    path: 'deals',
    component: DealsComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
