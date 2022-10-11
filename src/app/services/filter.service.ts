import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  valuesToFilter: any[] = [];
  filteredOptions!: Observable<any>;
  myForm = new FormControl('');

  constructor() {}

  filterOptions(values: any): void {
    this.valuesToFilter = values;
    this.filteredOptions = this.myForm.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): Array<[]> {
    const filterValue = value.toLowerCase();
    return this.valuesToFilter.filter(
      (option) =>
        option.name.toLowerCase().includes(filterValue) || option.id === +value
    );
  }
}
