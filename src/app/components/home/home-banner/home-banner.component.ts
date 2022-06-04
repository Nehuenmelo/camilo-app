import { Component, OnInit } from '@angular/core';
//import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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
		//private breakpointObserver: BreakpointObserver,
	) {
		/*this.mobileView = false;
		// detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 768px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          this.mobileView = true;
      } else {
          this.mobileView = false;
      }
    });
		*/
	 }

  ngOnInit(): void {
  }

}

