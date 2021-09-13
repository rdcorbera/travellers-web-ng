import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class Button {
  /**
   * Is this the principal call to action on the page?
   */
   @Input()
   primary = false;
 
   /**
    * What background color to use
    */
   @Input()
   backgroundColor?: string;
 
   /**
    * How large should the button be?
    */
   @Input()
   size: 'small' | 'medium' | 'large' = 'medium';
 
   /**
    * Button contents
    *
    * @required
    */
   @Input()
   label = 'Button';
 
   /**
    * Optional click handler
    */
   @Output()
   onClick = new EventEmitter<Event>();
 
   public get classes(): string[] {
     const mode = this.primary ? 'ui-button--primary' : 'ui-button--secondary';
 
     return ['ui-button', `ui-button--${this.size}`, mode];
   }
}
