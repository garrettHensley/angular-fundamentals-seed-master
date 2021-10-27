import { Component } from "@angular/core";

//this is a decorator
@Component({
  selector: "app-root" /* angular has one base component that it renders
  entire application from hence app-root */,
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <!-- Square bracket notation for property binding -->
      <h1 [innerHTML]="title"></h1>

      <button (click)="handleClick()">Change name</button>

      <img [src]="logo" />
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
      />
      <h1 class="huge" [innerHTML]="name"></h1>
    </div>
  `,
})
export class AppComponent {
  //title: string = 'Ultimate Angular';
  title: string;
  name: string = "Garrett";
  logo: string = "img/logo.svg";

  handleClick() {
    this.name = "Hensley";
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

  constructor() {
    this.title = "Ultimate Angular";
  }
}
