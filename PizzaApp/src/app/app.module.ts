import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonsModule} from './commons/commons.module';
import {AppRoutingModule} from './app-routing.module';
import {PreloadSelectedModulesService} from './preload-selected-modules.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CommonsModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [PreloadSelectedModulesService]
})
export class AppModule {
}
