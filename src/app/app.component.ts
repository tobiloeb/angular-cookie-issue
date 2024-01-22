import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>

  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-cookie-issue';

  constructor(httpClient: HttpClient) {
    httpClient.get('http://localhost:4200/backend/call').subscribe({
      next: () => {
        console.error('backendcall successfull');
      },
      error: () => {}
    })
  }
}
