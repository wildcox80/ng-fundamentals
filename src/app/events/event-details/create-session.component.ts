import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionI, restrictedWords } from '../shared/index';

@Component({

  templateUrl: './create-session.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input, .error select, .error textarea  { background-color: #e3c3c5; }
    .error ::-webkit-input-placeholder: { color: #999; }
    .error ::-moz-input-placeholder: { color: #999; }
    .error ::-ms-input-placeholder: { color: #999; }
  `]
})

export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;


  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues) {
    const session: SessionI = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };
  }
}
