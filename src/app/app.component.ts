import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public pageID: number = 1;

  changePage(page: number): void {
    this.pageID = page;
  }

}
