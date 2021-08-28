import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {MenusModule} from "./modules/menus/menus.module";
import {LoaderModule} from "./modules/shared/loader/loader.module";
import {LoaderInterceptor} from "./modules/shared/loader/loaderInterceptor";
import { FooterComponent } from './modules/footer/footer.component';
import {SelectPlaylistComponent} from "./modules/shared/select-playlist/select-playlist.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    MenusModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule,
    LoaderModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
