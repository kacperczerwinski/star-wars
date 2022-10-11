import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Detail } from 'src/app/interfaces/detail.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  get selectedItem(): Detail {
    return this.dataService.selectedItem;
  }

  get isStarshipDetails(): boolean {
    return this.dataService.starshipDetails;
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
