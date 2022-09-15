import { Component, OnInit } from '@angular/core';
import { HomeBannerComponent } from 'src/app/components/home/home-banner/home-banner.component';
import { ProductsPreviewComponent } from 'src/app/components/home/products-preview/products-preview.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
		'./home.component.scss',
		'../../app.component.scss'
	]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}