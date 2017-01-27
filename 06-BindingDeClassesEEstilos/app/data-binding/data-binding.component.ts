import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'exemplo-data-binding.html'
})
export class DataBindingComponent {
    url='';
    minhaVar = true;
    minhaVar2 = true;
    urlImage = 'http://lorempixel.com/400/200/nature/';
    constructor() { 
        this.url = 'https://web.whatsapp.com/';
    }

    getValor (){
        return 1;
    }
}