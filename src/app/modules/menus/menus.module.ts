import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SquareComponent} from '../square/square.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MainMenuComponent} from './main-menu/main-menu.component';
import {GetUnavailablesComponent} from './get-unavailables/get-unavailables.component';
import {RouterModule} from "@angular/router";
import {PlaceholderComponent} from './placeholder/placeholder.component';
import {ChangeOrderComponent} from './change-order/change-order.component';
import {SelectPlaylistComponent} from "../shared/select-playlist/select-playlist.component";
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { StringToPlaylistComponent } from './string-to-playlist/string-to-playlist.component';


@NgModule({
  declarations: [
    SquareComponent,
    SideMenuComponent,
    MainMenuComponent,
    GetUnavailablesComponent,
    PlaceholderComponent,
    ChangeOrderComponent,
    SelectPlaylistComponent,
    TopTracksComponent,
    StringToPlaylistComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule
  ],
  exports: [SquareComponent, SideMenuComponent, MainMenuComponent]
})
export class MenusModule {
}
