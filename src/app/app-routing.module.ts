import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GetUnavailablesComponent} from "./modules/menus/get-unavailables/get-unavailables.component";
import {PlaceholderComponent} from "./modules/menus/placeholder/placeholder.component";
import {ChangeOrderComponent} from "./modules/menus/change-order/change-order.component";
import {TopTracksComponent} from "./modules/menus/top-tracks/top-tracks.component";
import {StringToPlaylistComponent} from "./modules/menus/string-to-playlist/string-to-playlist.component";

const routes: Routes = [
  {path: 'unavailables', component: GetUnavailablesComponent},
  {path: 'randomize', component: ChangeOrderComponent},
  {path: 'get-top-tracks', component: TopTracksComponent},
  {path: 'string-to-spotify', component: StringToPlaylistComponent},
  {path: '', component: PlaceholderComponent}
];

@NgModule({
  declarations: [],
  // imports: [CommonModule]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
