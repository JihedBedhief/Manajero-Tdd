import { Component, OnInit } from "@angular/core";
import { TaskCardComponent } from "../task-card/task-card.component";
import { CardDetailsComponent } from "../card-details/card-details.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { MatDialog } from "@angular/material/dialog";
import { UpdateTaskComponent } from "../update-task/update-task.component";
import { ActivatedRoute } from "@angular/router";
import { TaskService } from "../../../services/Task/task.service";
import { Task,Test } from "../../Models/Task";


@Component({
  selector: "ngx-list-tasks",
  templateUrl: "./list-tasks.component.html",
  styleUrls: ["./list-tasks.component.scss"],
  standalone: true,
  imports: [TaskCardComponent, CommonModule, CdkDrag, CdkDropList],
})
export class ListTasksComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  projectId: string | "" = "";

  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    if (this.projectId) {
      this.taskService.getTaskByProjectId(this.projectId).subscribe((tasks: Task[]) => {
        console.log("Tasks fetched:", tasks);
        this.categorizeTasks(tasks);
      }, error => {
        console.error('Error fetching tasks:', error);
      });
    }
  }

  categorizeTasks(tasks: Task[]) {
    this.todo = [];
    this.inProgress = [];
    this.done = [];

    tasks.forEach((task) => {
      this.addTaskToList(task);
    });

   
    console.log("Todo list:", this.todo);
    console.log("In Progress list:", this.inProgress);
    console.log("Done list:", this.done);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  deleteItem(list: Task[], index: number) {
    list.splice(index, 1);
  }

  editItem(task: Task) {
    const newValue = prompt("Edit item", task.name);
    if (newValue !== null && newValue.trim() !== "") {
      task.name = newValue;
    }
  }

  openUpdateModal(task: Task) {
    const dialogRef = this.dialog.open(UpdateTaskComponent, {
      data: { task },
      width: "50vw",
      maxWidth: "90vw",
      panelClass: "custom-modal",
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onStatusChange(result); 
      }
    });
  }

  openDetailsModal(task: Task) {
    this.dialog.open(CardDetailsComponent, {
      data: { task },
      maxWidth: "80vw",
    });
  }

  onStatusChange(updatedTask: Task) {
 
    this.removeTaskFromList(updatedTask);
   
    this.addTaskToList(updatedTask);
  }

  deleteItemm(list: Task[], index: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      const task = list[index];
      this.removeTaskFromList(task);
    }
  }

  removeTaskFromList(task: Task) {
    let index = this.todo.findIndex((t) => t.name === task.name);
    if (index !== -1) this.todo.splice(index, 1);

    index = this.inProgress.findIndex((t) => t.name === task.name);
    if (index !== -1) this.inProgress.splice(index, 1);

    index = this.done.findIndex((t) => t.name === task.name);
    if (index !== -1) this.done.splice(index, 1);
  }

  addTaskToList(task: Task) {
    if (task.status === "To do") {
      this.todo.push(task);
    } else if (task.status === "in Progress") {
      this.inProgress.push(task);
    } else if (task.status === "done") {
      this.done.push(task);
    }
  }
}
