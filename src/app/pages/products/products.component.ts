import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	@ViewChild(MatSidenav)
	sidenav!: MatSidenav;
	category: string = 'tortas';

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
  }

	ngAfterViewInit(): void {
		this.observer.observe(['(max-width: 1000px)']).subscribe((res)=> {
			if(res.matches){
				this.sidenav.mode = 'over';
				this.sidenav.close();
			} else {
				this.sidenav.mode = 'side';
				this.sidenav.open();
			}
		})
	}

	switchCategory(category:string):void {
		this.category = category;
	}

}
