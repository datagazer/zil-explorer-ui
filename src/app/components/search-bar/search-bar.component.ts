import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  public searchString: string = '';

  public isAddress(searchString?: string): boolean {
    return Boolean(searchString && searchString.length === 40);
  }

  public isTransaction(searchString?: string): boolean {
    return Boolean(searchString && searchString.length === 64);
  }

  public isBlock(searchString?: string): boolean {
    return Boolean(searchString && /^\d+$/.test(searchString));
  }
}
