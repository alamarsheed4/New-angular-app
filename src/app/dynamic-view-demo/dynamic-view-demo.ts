import { Component, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification';

@Component({
  imports: [],
  selector: 'app-dynamic-view-demo',
  styleUrl: './dynamic-view-demo.css',
  templateUrl: './dynamic-view-demo.html',
})
export class DynamicViewDemo {

  numbers = [1,2,3,4];

  welcomeTemplate = viewChild.required<TemplateRef<unknown>>('welcomeTemplate');
  templateContainer = viewChild.required('templateContainer', {read: ViewContainerRef});
  showWelcomeTemplate(){
    // inside in this click event i have to write down the logic for display the Welcome message realted stuff
  
    this.templateContainer().createEmbeddedView(this.welcomeTemplate());
  
  }

  showform = viewChild.required<TemplateRef<unknown>>('showForm');

  showFormTemplate(){

    this.templateContainer().clear()
    this.templateContainer().createEmbeddedView(this.showform());

  }

  employeeFormTemplate = viewChild.required<TemplateRef<unknown>>('employeeFormTemplate')

  showEmployeeTemplate(){
    this.templateContainer().clear()
     this.templateContainer().createEmbeddedView(this.employeeFormTemplate())

  }

  componentContainer = viewChild.required('componentContainer', {read: ViewContainerRef})

  loadNotification(){
    this.componentContainer().clear();

    this.componentContainer().createComponent(NotificationComponent)
  }
}
