import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class PeticionesService{
	public category: any;

	constructor(
		private _http: HttpClient
	){
	}

	getCategoriesService(){
		var categoriesObj = [
			{
				id: 0,
				name: 'Tortas',
				taste: 'dulce',
				photo_link: '../../../../assets/img/tortas.jpg'
			}, 
			{
				id: 1,
				name: 'Tartas',
				taste: 'dulce',
				photo_link: '../../../../assets/img/tartas.jpg'
			},
			{
				id: 2,
				name: 'Budines',
				taste: 'dulce',
				photo_link: '../../../../assets/img/budines.jpg'
			},
			{
				id: 3,
				name: 'Medialunas JQ',
				taste: 'dulce',
				photo_link: '../../../../assets/img/medialunajq.jpg'
			},
			{
				id: 4,
				name: 'Masas Finas',
				taste: 'dulce',
				photo_link: '../../../../assets/img/masas_finas.jpg'
			},
			{
				id: 5,
				name: 'Masas Secas',
				taste: 'dulce',
				photo_link: '../../../../assets/img/masas_secas.jpg'
			},
			{
				id: 6,
				name: 'Sand. de Miga',
				taste: 'salado',
				photo_link: '../../../../assets/img/sand_miga.jpg'
			},
			{
				id: 7,
				name: 'Prepizzas',
				taste: 'salado',
				photo_link: '../../../../assets/img/prepizzas1.jpg'
			},
			{
				id: 8,
				name: 'Bebidas',
				taste: '',
				photo_link: '../../../../assets/img/bebidas.jpg'
			}
		]	
		//return this._http.get('http://localhost:3000/');
		return categoriesObj;
	}
}