import { Directive, Input, ElementRef, OnInit, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';


@Directive({
  selector: '[appShoecase]'
})
export class ShoecaseDirective implements OnInit {

  el: HTMLElement
  constructor(elRef: ElementRef) {
    this.el = elRef.nativeElement

    // this.el.style.color=this.color
  }

  ngOnInit(): void {

    this.el.style.color = this.color
    this.role="student"
  }



  @Input('clickCountColor') color: string;

  @HostListener('click') click() {
    // alert(`my color is ${this.color}`)
    this.clickCounterChange.emit(`my color is ${this.color} clicked`);
    this.clicked = !this.clicked;
    this.broderColor = this.clicked ? "red" : "blue";
    this.role="programer"

  }

  @Output() clickCounterChange = new EventEmitter<string>();


  @HostBinding('class.clicked') clicked: boolean;
  @HostBinding('style.border-color') broderColor: string;
  @HostBinding('attr.role') role: string;




}
