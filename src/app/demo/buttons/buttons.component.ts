import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
      <mat-icon fontIcon="face"></mat-icon>
      Home
    </button>

    <mat-checkbox>Click me!</mat-checkbox>
  `,
  styles: [],
})
export class ButtonsComponent {}
