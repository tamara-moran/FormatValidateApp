import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emailForm: FormControl;
  nameForm: FormControl;
  loginFormGroup: FormGroup;

 
  constructor(private formBuilder: FormBuilder) {
    this.nameForm = formBuilder.control({value: '', disabled: false}, [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]);
    this.emailForm = formBuilder.control({value: '', disabled: false}, [
      Validators.required,
      Validators.email
    ]);
    this.loginFormGroup = new FormGroup({ email: this.emailForm, name: this.nameForm});
    
  }

  ngOnInit(): void {
     
  }

  logIn = () => {
    alert('Name is:' +  this.nameForm.value + ' Email is' + this.emailForm.value);
  }
  
  emailFormErrors = (error: string) => {
    return this.loginFormGroup.controls.email.hasError(error);
  }
    

}
