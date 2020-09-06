import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }