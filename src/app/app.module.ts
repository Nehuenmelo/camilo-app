import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPreviewComponent } from './components/home/products-preview/products-preview.component';
import { ProductItemComponent } from './components/home/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeBannerComponent,
    HomeComponent,
    ProductsPreviewComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
