import { Component } from '@angular/core';

import { CursosComponent }       from './cursos/cursos.component';
import { TreinamentosComponent } from './treinamentos/treinamentos.component';
import { ListaManuaisComponent } from './manuais/lista-manuais.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <cursos-lista></cursos-lista>
        <treinamentos></treinamentos>
        <lista-manuais></lista-manuais>
    `,
    directives: [CursosComponent, TreinamentosComponent, ListaManuaisComponent]
})
export class AppComponent { }
