import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { DataService } from 'src/app/services/data.service';
import { People } from '../../interfaces/people.interface';
import { Detail } from 'src/app/interfaces/detail.interface';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: People[] = [];

  get myHeroes(): FormControl {
    return this.filterService.myForm;
  }

  get filteredOptions(): Observable<Array<People>> {
    return this.filterService.filteredOptions;
  }

  constructor(
    private filterService: FilterService,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.retrievePeople();
  }

  retrievePeople(): void {
    this.dataService.retrievePeople().subscribe((people: People[]) => {
      this.people = people as People[];
      this.filterService.filterOptions(this.people);
    });
  }

  onSelect(hero: Detail): void {
    this.dataService.manageData(hero, false);
    this.router.navigate(['people/detail', hero.name]);
  }
}
