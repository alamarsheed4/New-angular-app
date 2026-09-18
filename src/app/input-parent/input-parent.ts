import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputChild } from '../input-child/input-child';

@Component({
  imports: [ FormsModule, InputChild],
  selector: 'app-input-parent',
  styleUrl: './input-parent.css',
  templateUrl: './input-parent.html',
})
export class InputParent {

  employeeName = "Arsheed Alam"
  employeeRole = "Software Engineer"
}
