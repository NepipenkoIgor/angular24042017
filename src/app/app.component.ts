import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'ng-course';
  public placeholder: string = 'search term';
  public width: number = 50;
  public searchTerm: string;
  public logo: string = 'assets/images/logo.png';

  public onSearch(value: string): void {
    this.searchTerm = value;
  }
}
