import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-postagem',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './postagem.component.html',
  styleUrl: './postagem.component.css'
})
export class PostagemComponent {
  @Input() post: any;

  @Output() delete: EventEmitter<number> = new EventEmitter(); 

  
  onDelete(id: number) {
    this.delete.emit(id); 
  }
}
