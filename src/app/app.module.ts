import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from './components/products-list/products-list.component';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import { ProductService } from './services/product.service';
import { HeaderComponent } from './components/app-header/header.component';
import { DrinkCategoriesComponent } from './components/products-list/drink-categories/drink-categories.component';
import { ProductTile } from './components/product-tile/product-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    ProductListComponent,
    HeaderComponent,
    DrinkCategoriesComponent,
    ProductTile
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
