import {Component } from '@angular/core';

@Component({
    moduleId: module.id,//Obrigatório por conta da versão candidata do AngularJs 
    selector: 'lista-manuais',
    templateUrl: 'lista-manuais.component.html'
})
export class ListaManuaisComponent {
    //interpolation (Forma de DataBinding)
    nome = 'Mamãe Mamista';

    manuais  = ['C#', 'C++','Oracle'];
}