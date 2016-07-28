import { provideRouter, RouterConfig }  from '@angular/router';
import { CarTableComponent } from './car-table/car-table.component';
import { TaskTableComponent } from './task-table/task-table.component'

const routes: RouterConfig = [
    {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: CarTableComponent
  },
  {
    path: 'cars',
    component: CarTableComponent
  },
  {
    path: 'carshistory',
    component: CarTableComponent
  },
  {
    path: 'taskshistory',
    component: TaskTableComponent
  },
  {
    path: 'tasks',
    component: TaskTableComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
