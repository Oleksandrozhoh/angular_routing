import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>(); // input comes from url, check app.routs to see how dynamic route is set up, route param matching the input var name

  private userService = inject(UsersService);
  
  userName = computed(() => this.userService.users.find((user) => user.id == this.userId())?.name);


}
