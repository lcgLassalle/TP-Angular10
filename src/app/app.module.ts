import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './site/about/about.module';
import { FilmsModule } from './site/films/films.module';
import { HomeModule } from './site/home/home.module';
import { ErrorsModule } from './site/errors/errors.module';
import { SharedModule } from './site/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    FilmsModule,
    HomeModule,
    ErrorsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
