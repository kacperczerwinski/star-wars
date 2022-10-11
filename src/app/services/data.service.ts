import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Detail } from '../interfaces/detail.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedItem: Detail;
  starshipDetails: boolean;
  constructor(private http: HttpClient) {}

  manageData(data: Detail, details: boolean): void {
    this.starshipDetails = details;
    this.selectedItem = data;
  }

  retrieveStarships(): Observable<Object> {
    return this.http.get('  https://swapi.dev/api/starships/');
  }

  retrievePeople(): Observable<{ homeworld: string; homeWorldName: string }[]> {
    return this.http.get('https://swapi.dev/api/people/').pipe(
      switchMap((peoples: { results: [] }) =>
        forkJoin(
          peoples.results.map((people: { homeworld: string }) =>
            this.retrieveHomeWorld(people.homeworld).pipe(
              map((homeWorldName: { name: string }) => ({
                homeWorldName: homeWorldName.name,
                ...people,
              }))
            )
          )
        )
      )
    );
  }

  retrieveHomeWorld(homeWorldApi: string): Observable<Object> {
    return this.http.get(homeWorldApi);
  }
}
