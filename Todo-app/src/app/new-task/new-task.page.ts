import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  categories = ['work', 'personal', 'home']

  addtaskName
  addtaskDate
  addtaskPrio
  addtaskCategory

  taskObject
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.addtaskCategory = this.categories[index]
    console.log(this.addtaskCategory)
  }

  addTask(){
    this.taskObject = ({taskName:this.addtaskName,
                        taskDate:this.addtaskDate,
                        taskPrio:this.addtaskPrio,
                        taskCat:this.addtaskCategory})

    this.dismiss()
  }
}
