import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']//,
  // styles: [`
  //   .highlight {
  //     background-color: yellow;
  //     font-weight: bold;
  //   }
  // `]
})
export class EventBindingComponent implements OnInit {

  conteudoAtual : string = '';
  conteudoSalvo : string = '';
  isMouseOver : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    alert('Botão clicado!');
  }

  onKeyup(event:KeyboardEvent){
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave(value:string){
    this.conteudoSalvo = value;
  }

  onMouseSanp(){
    this.isMouseOver = !this.isMouseOver;
  }

}
