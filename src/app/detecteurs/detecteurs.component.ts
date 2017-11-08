import { Component, OnInit } from '@angular/core';
import { Detecteur } from '../detecteur';
import { DETECTEURS} from '../mock-detecteurs';


@Component({
  selector: 'app-detecteurs',
  templateUrl: './detecteurs.component.html',
  styleUrls: ['./detecteurs.component.css']
})
export class DetecteursComponent implements OnInit {
  detecteurs = DETECTEURS;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {

  }
}