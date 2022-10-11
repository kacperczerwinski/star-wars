import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { WorkinprogressComponent } from './workinprogress/workinprogress.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'starships', component: StarshipsComponent },
  ...['films', 'planets', 'species', 'vehicles'].map((path) => ({
    path,
    component: WorkinprogressComponent,
  })),
  { path: 'people/detail/:name', component: DetailsComponent },
  { path: 'starships/detail/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
