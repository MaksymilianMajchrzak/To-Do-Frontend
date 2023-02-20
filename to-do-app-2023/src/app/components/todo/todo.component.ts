import { Component } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  assignments: any;
  constructor(public service: TaskService) { }
  taskId: string = "";
  $assing: Observable<Task[]>
  ngOnInit() {
    this.service.GetTasks().subscribe(r => { this.assignments = r })
  }

}
