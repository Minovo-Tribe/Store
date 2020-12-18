import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { StoreModule } from './store/store.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { httpInterceptorProviders } from './config';
import { UserService } from './service/user.service';
import { ProductsResolver, UserResolver } from './util/data-resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreService } from './service/store.service';
import { ProductService } from './service/product.service';
import { LoadingService } from './service/loading.service';

@NgModule({
  declarations: [AppComponent, AuthComponent, AdminComponent, StoreComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    StoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    AuthService,
    httpInterceptorProviders,
    UserService,
    UserResolver,
    StoreService,
    ProductService,
    ProductsResolver,
    LoadingService,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
