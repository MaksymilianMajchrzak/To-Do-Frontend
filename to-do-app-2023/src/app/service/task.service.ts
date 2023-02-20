import { EventEmitter, Injectable, Output } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { TodoComponent } from "../components/todo/todo.component"

@Injectable({
  providedIn: "root"
})

export class TaskService {

  readonly ROOT_URL = "https://localhost:7128/api/Tasks"
  constructor(private http: HttpClient,) {
  }
  @Output() refreshList = new EventEmitter();
  GetTasks() {
    return this.http.get(this.ROOT_URL)
  }
  CreateTask(x) {
    this.http.post(this.ROOT_URL, {
      "id": 0, "taskDesc": x
    }).subscribe()
    this.GetTasks()

  }
  DeleteTask(x) {
    this.http.delete(this.ROOT_URL + "/" + x).subscribe()
    this.GetTasks()
  }
}
