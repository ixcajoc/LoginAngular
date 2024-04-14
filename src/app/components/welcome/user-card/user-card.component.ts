import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/type-user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
      
    <div class="card-body">
      <p class="card-title fs-3"><span class="fw-bolder">Id:</span> {{user.id}}</p>
      <p class="card-text"><span class="fw-bold">Usuario:</span> {{user.user}}</p>
      <p class="card-text"><span class="fw-bold">Descripcion:</span> {{user.type_user.descripction}}</p>
      <p class="card-text"><span class="fw-bold">Tipo:</span> {{user.type_user.type}}</p>
      <p class="card-text"><span class="fw-bold">id Tipo Usuario:</span> {{user.type_user.type_user_id}}</p>

      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
  
  `,
})
export class UserCardComponent {
  @Input() user!: User;

}
