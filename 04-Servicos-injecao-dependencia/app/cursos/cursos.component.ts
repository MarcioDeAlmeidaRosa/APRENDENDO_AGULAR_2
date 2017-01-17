import { Component } from '@angular/core';

import {CursosService} from './cursos.services';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
    providers: [CursosService] //-<--vincula o serviço ao componente como provedor de dados
})
export class CursosComponent {
    nomePortal = 'Cursos do MAGU!';
    cursos = [''];

    constructor(cursosService: CursosService){
        console.log('CursosComponent->constructor');
        this.cursos = cursosService.getCursos();
        console.log(this.cursos);
    }
}