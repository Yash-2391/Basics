import { Component } from '@angular/core';
import { a } from './Array';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name = 'yash gohil';
  enRoll: number[] = [15, 12, 17, 24, 56];
  imgURL = "https://picsum.photos/id/757/200/300"
  display = (): number => {
    return this.enRoll.length;
  }
  a1 = [...a];
  length = a.length;

  // this is type assertion and event binding
  // every event has $event property object and in that event.target contains all dom properties
  // (click),(keyup),(keydown),(blur)=just focus on input element,(mouseover),(mouseleave)
  // this change event can be with a button , h1 or input so it is imprtant to tyoe assret the element using 'as' or '<type>'
  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event);
  }

  // logitem console the index sent by post component and deletes the element of a1 of that particular index]
  // splice is used to delete the array element array.splice(index,deleteCount)
  // if we dont specify the deleteCount it deletes all the array elements all that index
  logItem(event: number){
    console.log(event);
     this.a1.splice(event,1)
  }

  // date object to create date
  currentDate = new Date();

  //temperature for decibel pipe which is used to format number system
  temp = 25.3;


  // directives
  blueClass = false
  // ng class component methed
  // flag? states that it is not compulsury to pass the parameter
  getCss(flag?: string){
    let cssClass;
    if(flag == 'red'){
      cssClass = {
        'red': true
      }
    }
    else if(flag == 'blue'){
      cssClass = {
        'blue' : true
      }
    }
    else{
      cssClass = {
        'fontOne' : true,
        'fontStyle' : true
      }
    }
    return cssClass;
  }

  //[ngStyle]
  fontSize = 100;
}
