import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[parallax]',
  host: {
    '(ionScroll)': 'onCtrlScroll($event)'
  }

})
export class ParallaxDirective {

  header: any;
  headerHeight: any;
  main: any;
  translateAmount: any;
  scaleAmount: any;

  constructor( private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    let content = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = content.getElementsByClassName('details-img')[0];
    this.main = content.getElementsByClassName('details-main')[0];
  
    this.headerHeight = this.header.clientHeight;

    this.renderer.setElementStyle(this.header, 'webTransformOrigin', 'center bottom');
    this.renderer.setElementStyle(this.main, 'position', 'absolute');
    this.renderer.setElementStyle(this.main, 'background', '#fff');
  }

  onCtrlScroll(event) {
    console.log(event);
    event.domWrite(() => {
      this.update(event);
    }); 
  }

  update(event) {
    if(event.scrollTop >= 0) {
      this.translateAmount = event.scrollTop/3;
      this.scaleAmount = 1;
    } else {
      this.translateAmount = 0;
      this.scaleAmount = -event.scrollTop / this.headerHeight + 1;
  }
    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,'+this.translateAmount+'px,0) scale(' + this.scaleAmount + ', ' + this.scaleAmount + ')');
    
  }

}
