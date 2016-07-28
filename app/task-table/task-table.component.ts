import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TaskService } from '../services/task.service'
//import { TaskDetailComponent } from '../task-detail.component'

@Component({
    moduleId: module.id,
  selector: 'task-table',
  templateUrl: 'task-table.component.html',
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .tasks {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .tasks li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .tasks li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .tasks li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .tasks .text {
      position: relative;
      top: -3px;
    }
    .tasks .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  //directives: [TaskDetailComponent],
  providers: [TaskService]
})
export class TaskTableComponent implements OnInit{
  title = 'DL Tasks';
  tasks: Task[];
  selectedTask: Task;
  
  constructor(private taskService: TaskService) {}
  
  getTasks(){
      this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }
  
  ngOnInit() {
      this.getTasks();
  }
  
  onSelect(task: Task) { this.selectedTask = task; }
}
