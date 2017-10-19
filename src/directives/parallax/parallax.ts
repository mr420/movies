import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
  selector: '[parallax]',
  host: {
    '(ionScroll)': 'onCtrlScroll($event)'
  }

})
export class ParallaxDirective {

  header: any;
  main: any;
  translateAmount: any;

  constructor( private el: ElementRef, private re: Renderer) {
  }

  ngOnInit() {
    let content = this.el.nativeElement.getElementsByClassName('scroll-content')[0];
    this.header = content.getElementsByClassName('details-img')[0];
    this.main = content.getElementsByClassName('details-main')[0];
  
    this.re.setElementStyle(this.header, 'webTransformOrigin', 'center bottom');
    this.re.setElementStyle(this.main, 'position', 'absolute');
    this.re.setElementStyle(this.main, 'background', '#fff');
  }
  onCtrlScroll(event) {
    console.log(event);
    event.domWrite(() => {
      this.update(event);
    }); 
  }

  update(event) {
    if(event.scrollTop > 0) {
      this.translateAmount = event.scrollTop/2;
    }else {
      this.translateAmount = 0;
  }
    this.re.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,'+this.translateAmount+'px,0) scale(1,1)');
    
  }


}
