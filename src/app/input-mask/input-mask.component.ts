import { Component, EventEmitter, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.css']
})
export class InputMaskComponent implements OnInit {

  form: FormGroup;
   constructor(fb: FormBuilder) {
    this.form = fb.group({
      accountNumber: ''
    });
  }

  ngOnInit() {
  }

}
