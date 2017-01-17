import { Component } from '@angular/core';

import {CursosComponent} from './cursos/cursos.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <cursos-lista></cursos-lista>
    `,
    directives: [CursosComponent]
})
export class AppComponent { }
