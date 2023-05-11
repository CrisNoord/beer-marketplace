import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: ':id', component: ProductDescriptionComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
