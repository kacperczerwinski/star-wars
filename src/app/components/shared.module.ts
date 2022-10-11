import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { WorkinprogressComponent } from './workinprogress/workinprogress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { HeightPipe, LengthtPipe } from '../pipes/height-and-length.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    PeopleComponent,
    StarshipsComponent,
    WorkinprogressComponent,
    HeightPipe,
    LengthtPipe,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRoutingModule,
  ],
  providers: [],
})
export class SharedModule {}
