import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  numero1!: number;
  numero2!: number;

  @Output() resultadoEvent = new EventEmitter<number>();

  calcularSumar(){
    const resultado = this.numero1 + this.numero2;
    this.resultadoEvent.emit(resultado);
  }
}
