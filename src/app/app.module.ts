import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoCardComponent } from './curso-card/curso-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    CursoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
