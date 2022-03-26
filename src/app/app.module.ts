import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DesignComponent } from './design/design.component';
import { ParticipantsComponent } from './participants/participants.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ParticipantsComponent },
    ])
  ],
  declarations: [ AppComponent, HelloComponent, DesignComponent, ParticipantsComponent ],
  bootstrap:    [ AppComponent, DesignComponent]

  
})
export class AppModule { }
