import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { SuperiniaiComponent } from './superiniai/superiniai.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    SuperiniaiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
