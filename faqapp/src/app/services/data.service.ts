import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Eric',
        hide: true,
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is orange',
        hide: true,
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is javascript',
        hide: true,
      }
    ]
   }
   getQuestions(){
     return this.questions;
   }
}
