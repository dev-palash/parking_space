import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('blue');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }

  highlight(color: string | null){
    this.render.setStyle(this.el.nativeElement, 'color', color);
  }

}
