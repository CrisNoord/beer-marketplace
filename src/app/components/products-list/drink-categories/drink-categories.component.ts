import { Component } from '@angular/core';

@Component({
  selector: 'app-drink-categories',
  templateUrl: './drink-categories.component.html',
  styleUrls: ['./drink-categories.component.scss']
})
export class DrinkCategoriesComponent {
  categories = [
    {
      name: 'All',
      selected: false
    },
    {
      name: 'Beer',
      selected: true
    },
    {
      name: 'Wine',
      selected: false
    }
  ]
}