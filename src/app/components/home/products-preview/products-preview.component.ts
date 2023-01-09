import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss'],
	providers: [PeticionesService]
})
export class ProductsPreviewComponent implements OnInit {
	public category: any;
	public categories: Category[];

  constructor(
		private _peticionesService: PeticionesService
	) {
		//this.category = new Category(0,'','','');
	 }

  ngOnInit(): void {
		this.getCategories();
  }

	getCategories(){
		/*this._peticionesService.getCategoriesService().subscribe(
			result => {
				this.categories = result;
				console.log(this.categories);
			},
			error => {
				console.log(error);
			}
		)
		*/
		this.categories = this._peticionesService.getCategoriesService()
	}

}
