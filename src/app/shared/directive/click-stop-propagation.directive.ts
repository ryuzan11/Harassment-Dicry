import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopPropagation]'
})
export class ClickStopPropagationDirective {

  @HostListener('click', ['$event'])
  public onClick(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
  }

}
