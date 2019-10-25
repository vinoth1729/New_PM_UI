import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  constructor() { }

  ngOnInit() {
  }

}
