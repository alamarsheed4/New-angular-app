import { Component, computed, effect, signal } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {


  EmployeeName = signal("Peter");

  basicSalary = signal(30000);

  yearlySalary = computed(()=>this.basicSalary() * 12)

  constructor(){
    effect(()=>{
      console.log(
        `Employee Name: ${this.EmployeeName()} || ${this.basicSalary()}`
      );
      
    });
  }

  ChangeName(){
    this.EmployeeName.set('Robert Jr.')
  }

  setSalary(){
   this.basicSalary.set(50000)
   
  }

  updateSalary(){
    this.basicSalary.update(currentSalary=>
      currentSalary + 5000
    )
  }

}
