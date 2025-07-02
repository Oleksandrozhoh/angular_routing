import { Routes } from "@angular/router";
import { TaskComponent } from "./app/tasks/task/task.component";
import { NoTaskComponent } from "./app/tasks/no-task/no-task.component";
import { UserTasksComponent } from "./app/users/user-tasks/user-tasks.component";

export const appRoutes: Routes =[
    {
        path: '', // <domain>/
        component: NoTaskComponent
    },
    {
        path: 'users/:userId', // <domain>/users/<user-id>
        component: UserTasksComponent,
    },
]
