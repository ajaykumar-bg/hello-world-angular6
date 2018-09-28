import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appInputMask]'
})
export class InputMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backspace) {
    const visibleDigits = 4, limit = 10;
    if (event && event.length >= limit) {
      let finalVal: string, trimmedValue: string, valWithoutLastFour: string;

      trimmedValue = event.substring(0, limit);
      //Mask all except last 4 digits
      //finalVal = trimmedValue.replace(/\d(?=\d{4})/g, '*');

      //Mask last 4 digits
      valWithoutLastFour = trimmedValue.slice(0, -4);
      finalVal = valWithoutLastFour.concat('****');
      this.ngControl.valueAccessor.writeValue(finalVal);
    }
  }

}
