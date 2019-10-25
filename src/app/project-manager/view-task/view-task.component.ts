import { Component, OnInit } from '@angular/core';

export interface ITask {
  task: String;
  parentTask: String;
  priority: number;
  startDate: Date;
  endDate: Date;
}
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  tasks: ITask[] = [{
    task: 'Sample task',
    parentTask: 'Sample parent task',
    priority: 10,
    startDate: new Date,
    endDate: new Date
  },
  {
    task: 'Sample task',
    parentTask: 'Sample parent task',
    priority: 10,
    startDate: new Date,
    endDate: new Date
  }];
  constructor() { }

  ngOnInit() {
  }

}
