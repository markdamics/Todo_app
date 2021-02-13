import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    taskName : 'Programming',
    taskTime : '14:00',
    taskDate : '12-10-21',
    taskPrio : 'high',
    taskCat : 'Work'
  },
  {
    taskName : 'More Prog',
    taskTime : '16:00',
    taskDate : '02-02-21',
    taskPrio : 'medium',
    taskCat : 'Work'
  },
  {
    taskName : 'Shopping',
    taskTime : '9:00',
    taskDate : '12-01-21',
    taskPrio : 'low',
    taskCat : 'Personal'
  }
  ]

  today : number = Date.now()

  constructor() {}

}
