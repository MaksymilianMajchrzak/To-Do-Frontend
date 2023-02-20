import { Component } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { NgModule } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app-2023';
  assignmentDesc: string = ""
  addAssignmentInput = document.getElementById("createTask")

  constructor(public service: TaskService) { }

  ngOnInit() {
    this.assignmentDesc = ""
  }


}
