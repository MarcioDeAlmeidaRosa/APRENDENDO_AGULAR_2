import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  nome: string = 'Marcio de Almeida Rosa';
  telefone: string = '11 9-8553-9635';
  apelido: string = 'Magu';
  tamanhoDePe: string = '44';

  pessoa: {} = {nome: 'Magu', telefone: '11 93652-5632', apelido:'13'};

  constructor() { }

  ngOnInit() {
  }

}
