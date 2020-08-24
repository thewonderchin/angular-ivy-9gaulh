import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree',
  template: '<h1>Hello {{name}}!</h1>',
  styles: ['h1 { font-family: Lato; }']
})
export class TreeComponent {
  @Input() name: string;
}