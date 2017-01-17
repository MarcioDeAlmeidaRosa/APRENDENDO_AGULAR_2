import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
    getCursos() :string[] {
        return ['C# .NET','AngularJS 1','AngularJS 2','Java','Estrutura de dados'];
    }
}