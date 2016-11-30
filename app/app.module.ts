import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuloCompeticones } from './competiciones/competiciones.modulo';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, RouterModule, HttpModule, ModuloCompeticones],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
