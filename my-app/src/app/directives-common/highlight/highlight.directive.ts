import { Directive, ElementRef } from '@angular/core';
@Directive({
    selector: '[highlight]' //atribute directive 
})
export class HighlightDirective {
   
    constructor(
       el:ElementRef
    ) {
         el.nativeElement.style.backgroundColor = '#fff';
    }
   
}