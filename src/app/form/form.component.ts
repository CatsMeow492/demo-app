import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  get addressesArray(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      addresses: this.formBuilder.array([this.createAddress()]),
      file: [null, Validators.required],
    });
  }

  createAddress(): FormGroup {
    return this.formBuilder.group({
      street: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      date: [null, Validators.required],
    });
  }


  addAddress() {
    (this.form.get('addresses') as FormArray).push(this.createAddress());
  }

  removeAddress(index: number) {
    (this.form.get('addresses') as FormArray).removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
