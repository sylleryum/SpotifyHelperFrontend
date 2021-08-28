import {Component, OnInit} from '@angular/core';
import {SpotifyService, UserPlaylists} from "../../../spotify.service";

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.css']
})
export class ChangeOrderComponent implements OnInit {
  playlists!: UserPlaylists[]
  randomPlaylistName!: string

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.spotifyService.getPlaylists().subscribe(value => {
      this.playlists = value.user_playlists
    })
  }

  randomizePlaylist(playlistId: string) {
    if (playlistId !== "default") {
      this.spotifyService.randomize(playlistId).subscribe(playlistName => {
          this.randomPlaylistName = playlistName.playlist_name
        }
      )
    }
  }

}
