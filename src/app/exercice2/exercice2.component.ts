import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('mytext', {static: true}) public el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  changeValeur() {
  	this.valeur = this.el.nativeElement.value;
  }
}
