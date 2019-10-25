import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

export interface Project {
  name: string;
  noOfTasks: number;
  completed: boolean;
  startDate: Date;
  endDate: Date;
  priority: number;
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  setDate = true;
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  animal: string;
  name: string;

  projects: Project[] = [
    {
      name: 'project 1',
      noOfTasks: 4,
      completed: true,
      startDate: new Date(),
      endDate: new Date(),
      priority: 40
    },
    {
      name: 'project 2',
      noOfTasks: 4,
      completed: true,
      startDate: new Date(),
      endDate: new Date(),
      priority: 40
    },
    {
      name: 'project 3',
      noOfTasks: 4,
      completed: true,
      startDate: new Date(),
      endDate: new Date(),
      priority: 40
    }
  ];

  formatLabel(value: number) {
    if (value >= 50) {
      return Math.round(value / 1);
    }

    return value;
  }
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.startDate.value);
  }

  sortBy(prop: string) {
    this.projects.sort((a,b) => {
      return a[prop] < b[prop] ? 1 : -1
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'project-modal-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
