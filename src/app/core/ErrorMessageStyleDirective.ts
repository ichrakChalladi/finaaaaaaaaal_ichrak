import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appErrorMessageStyle]'
})
export class ErrorMessageStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'orange');
    // Vous pouvez également personnaliser d'autres styles ici si nécessaire
  }
}
