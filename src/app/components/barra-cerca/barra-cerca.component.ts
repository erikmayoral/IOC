import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  templateUrl: './barra-cerca.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  styleUrls: ['./barra-cerca.component.scss']
})


export class BarraCercaComponent {
  @Output() cerca = new EventEmitter<string>();

  texto: string = '';
  onSubmit(){
    this.cerca.emit(this.texto);
  }

  //DESUSO
  // onCerca(event: any) {
  //   this.cerca.emit(event.target.value);
  // }
}