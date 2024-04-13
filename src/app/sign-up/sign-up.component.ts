import { Component, OnInit } from '@angular/core';
import { Form } from '../models/types/form.type';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  signUpForm: Form = {
    firstName: '',
    lastName: '',
    email: '',
    };
    
    minLengthWord: number = 5
    maxLengthWord: number = 15
    minLengthErrorSentence: string= "";
    maxLengthErrorSentence: string = "";
    
    ngOnInit(){
      this.generateLengthErrorMessages(this.minLengthWord, this.maxLengthWord)
    }
    generateLengthErrorMessages(minLength: number, maxLength: number): void {
      this.minLengthErrorSentence = `doit faire ${minLength} caractères minimum`
      this.maxLengthErrorSentence = `doit faire ${maxLength} caractères maximum`
    }
    onSubmit() {
      console.log(this.minLengthErrorSentence);
    }
}
