import { Component, OnInit } from '@angular/core';
import tortasData from '../../../mocks/decoraciones_tortas.json';

@Component({
  selector: 'app-tortas',
  templateUrl: './tortas.component.html',
  styleUrls: ['./tortas.component.scss']
})
export class TortasComponent implements OnInit {
	tortas: any[] = tortasData;

  constructor() { }

  ngOnInit(): void {
  }

}
