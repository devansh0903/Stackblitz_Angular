import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DesignComponent } from './design/design.component';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DesignComponent,ExerciseComponent ],
  bootstrap:    [ AppComponent, DesignComponent, ExerciseComponent ]
})
export class AppModule { }
