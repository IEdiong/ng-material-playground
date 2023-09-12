import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  personForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      course: ['', Validators.required],
      people: this.formBuilder.array([]),
    });
  }

  get people(): FormArray {
    return this.personForm.get('people') as FormArray;
  }

  addPerson() {
    const personGroup = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    });

    this.people.push(personGroup);
  }

  removePerson(index: number): void {
    this.people.removeAt(index);
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      const formData = this.personForm.value;
      console.log(formData);
    }
  }
}
