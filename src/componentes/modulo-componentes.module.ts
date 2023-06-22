import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardEntradaComponent } from './card-entrada/card-entrada.component';



@NgModule({
  declarations: [CardEntradaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule 
  ],
  exports: [CardEntradaComponent]
})
export class ModuloComponentesModule { }
