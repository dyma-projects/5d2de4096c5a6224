import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
	@Input() compteur: number;
	@Output('change') public changeCompteur: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increase(): void {
  	this.compteur++;
  	this.changeCompteur.emit(this.compteur);
  }

  decrease(): void {
  	this.compteur--;
  	this.changeCompteur.emit(this.compteur);
  }
}
