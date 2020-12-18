import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store.routing';
import { HomeComponent } from './home/home.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatGridListModule } from '@angular/material/grid-list';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DealsComponent } from './deals/deals.component';
import { SharedModule } from '../shared/shared.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    AddProductComponent,
    ProductsComponent,
    DealsComponent,
    ProductViewComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatCarouselModule.forRoot(),
    MatGridListModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SharedModule,
  ],
})
export class StoreModule {}
