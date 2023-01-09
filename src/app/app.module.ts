import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeBannerComponent } from './components/home/home-banner/home-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPreviewComponent } from './components/home/products-preview/products-preview.component';
import { ProductItemComponent } from './components/home/product-item/product-item.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TortasComponent } from './pages/products-pages/tortas/tortas.component';
import { TartasComponent } from './pages/products-pages/tartas/tartas.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BudinesComponent } from './pages/products-pages/budines/budines.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeBannerComponent,
    HomeComponent,
    ProductsPreviewComponent,
    ProductItemComponent,
    AboutUsComponent,
    ProductsComponent,
    TortasComponent,
    TartasComponent,
    FooterComponent,
    BudinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		FontAwesomeModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		MatIconModule,
		MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
