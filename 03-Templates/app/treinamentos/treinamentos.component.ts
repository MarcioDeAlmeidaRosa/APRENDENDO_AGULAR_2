import {Component} from '@angular/core';

@Component({
    selector: 'treinamentos',
    template: `<p>Meu nome é : {{nome}} </p>
    <p>Nossos treinamentos:</p>
    <ul>
        <li *ngFor="let treinamento of treinamentos">
            {{treinamento}}
        </li>
    </ul>
    `
})
export class TreinamentosComponent {
    //interpolation (Forma de DataBinding)
    nome = 'Xuxa Meneguel';

    treinamentos  = ['Dança dos baixinhos', 'Dança das paquitas','Xuxa só para baixinhos'];


}