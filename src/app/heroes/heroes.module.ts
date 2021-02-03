import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    // Acá se declaran los modulos relacionados en este caso con heroes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],

    // Para que sea visible fuera de este modulo se debe exportar
    exports: [
        ListadoComponent
    ],

    // Esto importa directivas (ngFor, ngIf, etc), pipes, entre otros.
    // De lo contrario estas no se podrian usar.
    imports: [
        CommonModule
    ]
    
})

export class HeroesModule {

}