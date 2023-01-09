import { Component, OnInit } from '@angular/core';
import tartasData from '../../../mocks/tartas.json';

@Component({
  selector: 'app-tartas',
  templateUrl: './tartas.component.html',
  styleUrls: ['./tartas.component.scss']
})
export class TartasComponent implements OnInit {
	tartas: any[] = tartasData;

  constructor() { }

  ngOnInit(): void {
  }

}
