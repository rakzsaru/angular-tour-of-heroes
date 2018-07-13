import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'Hello {{title}}',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
}
