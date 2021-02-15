import { NewTaskPage } from './../new-task/new-task.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList = [{
    taskname: 'Coding',
    taskdate: '2021-02-15T12:00',
    tasknote: 'coding conding and coding'
  },
  {
    taskname: 'workout',
    taskdate: '2021-02-15T09:00',
    tasknote: 'Back and biceps'
  },
  {
    taskname: 'Shopping',
    taskdate: '2021-02-15T16:00',
    tasknote: 'vegetables and fruits'
  }
  ]

  today : number = Date.now()

  constructor(public modalCtrl: ModalController) {}

  /*async addTask(){
    const modal = await this.modalCtrl.create({
      component: NewTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present()
  }

  delete(index){
    this.todoList.splice(index,1)
  }*/

}
