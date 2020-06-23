import { Directive, ElementRef, HostListener } from '@angular/core';
import { CounterService } from '../s/counter.service';

@Directive({
  selector: '[appAppHighight]'
})
export class AppHighightDirective {

  constructor(private el:ElementRef,  private counterSVC: CounterService) { }

  @HostListener('mouseenter') onMouseEnterShuki(){
    this.el.nativeElement.style.backgroundColor='yellow';
    this.counterSVC.hoverCounter++
  }

  @HostListener('click') onClikeKsky(){
    this.el.nativeElement.style.backgroundColor='violet';
    this.counterSVC.clickCounter++
  }

}
