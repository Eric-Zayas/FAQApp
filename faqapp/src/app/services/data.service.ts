import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'I am Genji',
        hide: true,
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is silver',
        hide: true,
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is japanese, I love saying: Ryujin no ken wo kurae!',
        hide: true,
      },
      {
        text: 'What do you love?',
        answer: 'I love Overwatch',
        hide: true,
      }
    ]
   }
   getQuestions(){
     return this.questions;
   }
   addQuestion(question:Question){
     this.questions.unshift(question);
   }
}
