import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input('appDropdown') place:string="";
  isopen = false;

  constructor(private elementRef:ElementRef,private render:Renderer2) { }

  @HostListener('click') open(){
    this.isopen=!this.isopen;
    if(this.place==="header")
    {
      if(this.isopen){
        this.render.addClass((<HTMLElement>this.elementRef.nativeElement).children[1],"show")
      }else{
        this.render.removeClass((<HTMLElement>this.elementRef.nativeElement).children[1],"show")
      }
    }
    if (this.place==="detail") {

      if(this.isopen){
        this.render.addClass((<HTMLElement>this.elementRef.nativeElement).children[1],"show")
      }else{
        this.render.removeClass((<HTMLElement>this.elementRef.nativeElement).children[1],"show")
      }
    }
  }

}
