import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  get myHeroes(): FormControl {
    return this.filterService.myForm;
  }
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}
}
