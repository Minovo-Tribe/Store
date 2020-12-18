import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { StoreComponent } from './store/store.component';
import { AuthGuard } from './config/auth-guard';
import { UserResolver } from './util/data-resolver';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    component: StoreComponent,
    canActivate: [AuthGuard],
    resolve: { user: UserResolver },
    loadChildren: () =>
      import('./store/store.module').then((m) => m.StoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
