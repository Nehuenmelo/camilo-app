import { Component, OnInit } from '@angular/core';

import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss',
	'../../../app.component.scss']
})
export class HomeBannerComponent implements OnInit {
	public mobileView: boolean;

  constructor(

	) {
		
	 }

  ngOnInit(): void {
  }

}

