import { Component } from '@angular/core';

import { Search }    from './search';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent {

  priceLevel = ['$', '$$',
            '$$$', '$$$$'];

  submitted = false;

  onSubmit() { this.submitted = true; }

}
