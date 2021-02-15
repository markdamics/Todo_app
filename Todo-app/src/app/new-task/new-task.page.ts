import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  categories = ['work', 'personal', 'home']

  newtaskName
  newtaskDate
  newtaskPrio
  newtaskCategory

  taskObject
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
    this.newtaskCategory = this.categories[index]
    console.log(this.newtaskCategory)
  }

  addTask(){
    this.taskObject = ({taskName:this.newtaskName,
                        taskDate:this.newtaskDate,
                        taskPrio:this.newtaskPrio,
                        taskCategory:this.newtaskCategory})

    this.dismiss()
  }
}
