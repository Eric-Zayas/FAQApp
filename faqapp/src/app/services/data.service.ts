import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() {
    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'I am Genji',
    //     hide: true,
    //   },
    //   {
    //     text: 'What is your favorite color?',
    //     answer: 'My favorite color is silver',
    //     hide: true,
    //   },
    //   {
    //     text: 'What is your favorite language?',
    //     answer: 'My favorite language is japanese, I love saying: Ryujin no ken wo kurae!',
    //     hide: true,
    //   },
    //   {
    //     text: 'What do you love?',
    //     answer: 'I love Overwatch',
    //     hide: true,
    //   }
    // ]
   }
   //getQuestions from local Storage
   getQuestions(){

    if(localStorage.getItem('questions') === null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
     return this.questions;
   }
   addQuestion(question:Question){
    this.questions.unshift(question);
     let questions;
    if(localStorage.getItem('questions') === null){
      questions = [];
      this.questions.unshift(question);
      JSON.stringify(localStorage.setItem('questions',questions))
    }else{
      questions = JSON.parse(localStorage.getitem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions',JSON.stringify(questions));
    }
   
   }

   removeQuestion(question){
     for(let i = 0; i < this.questions.length;i++){
       if(this.questions[i].text === question.text){
         this.questions.splice(i,1);
       }
     }
   }
}
