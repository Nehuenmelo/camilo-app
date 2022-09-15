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

	getCategoriesService():Observable<any>{
		return this._http.get('http://localhost:3000/');
	}
}