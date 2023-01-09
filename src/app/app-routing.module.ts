import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
	{path:'', component: HomeComponent},
	{path:'home', component: HomeComponent},
	{path:'products', component: ProductsComponent},
	{path:'products/tortas', component: ProductsComponent},
	{path:'products/tartas', component: ProductsComponent},
	{path:'products/budines', component: ProductsComponent},
	{path:'products/sand-miga', component: ProductsComponent},
	{path:'products/otros', component: ProductsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }