import { Component, OnInit } from '@angular/core';
export interface IUser{
    firstName: string;
    lastName: string;
    id: number;
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  users: IUser[] = [{
    firstName: 'Steve',
    lastName: 'Mike',
    id: 123
  },
  {
    firstName: 'Mike',
    lastName: 'Steve',
    id: 321
  }];
  constructor() { }

  ngOnInit() {
  }

}
