import { Component, Input, EventEmitter,Output, OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit{
  @Input() postImgURL = '';

  // whatever name we give to the in INPUT parenthesis it must be there in property binding in parent component
  @Input('numberArray') a: number[] = [];


  // event emmitter allows us to create custom events or sending data from child to parent component
  // has four steps
  // 1: child: create EventEmitter using below syntax
  // 2: child: emit the event in child.html page using imgSelected.emit(data to send to parent)
  // 3: parent: in parent.html accept the event by event binding and bind that event (imgSelected)="logImg($event) here $event will have that data sended by the child component"
  // 4: parent: declare that logImg(event) method in parent.ts class

  @Output() imgSelected = new EventEmitter<string>()

  @Output() itemSelected = new EventEmitter<number>()


  // LifeCycle hooks

  // runs when component is created
  constructor(){
    console.log("construtor called");
  }

  // runs when all data binding settles
  ngOnInit(): void {
    console.log("on init called")
  }

  // runs when any kind of change is performed
  ngOnChanges(changes: SimpleChanges): void {
      console.log("ng on changes called called")
  }

  // runs when component is destroyed
  ngOnDestroy(): void {
    console.log("ng destroy called")
  }

  // runs when change detection takes placed
  ngDoCheck(): void {
        console.log("ng do check called")
  }

  // content: projected from parent class
  // view: it is the html template for the parent class content
  // the projected template is called th content and the component template is called the view.
  // runs after content is checked for changes
  ngAfterContentChecked(): void {
      console.log("ng after content checked called")
  }

  // runs after content gets initialised
  ngAfterContentInit(): void {
      console.log("ng after content init called")
  }

  // runs after component template is checked after changes
  ngAfterViewChecked(): void {
      console.log("ng after view checked called")
  }

  // runs after component template is initialised
  ngAfterViewInit(): void {
    console.log("ng after view init called")
  }
}

