import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { DataService } from 'src/app/services/data.service';
import { Starship } from '../../interfaces/starship.interface';
import { Detail } from 'src/app/interfaces/detail.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent implements OnInit {
  starships: Starship[] = [];

  get filteredOptions(): Observable<Array<Starship>> {
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
    this.dataService.retrieveStarships().subscribe((data: { results: [] }) => {
      this.starships = data.results;
      this.filterService.filterOptions(this.starships);
    });
  }

  onSelect(starship: Detail): void {
    this.dataService.manageData(starship, true);
    this.router.navigate(['starships/detail', starship.name]);
  }
}
