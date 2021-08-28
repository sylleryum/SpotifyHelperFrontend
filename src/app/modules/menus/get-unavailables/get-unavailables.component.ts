import {Component, OnInit} from '@angular/core';
import {SpotifyService, UnavailableTrack, UserPlaylists} from "../../../spotify.service";

@Component({
  selector: 'app-get-unavailables',
  templateUrl: './get-unavailables.component.html',
  styleUrls: ['./get-unavailables.component.css']
})
export class GetUnavailablesComponent implements OnInit {
  playlists!: UserPlaylists[]
  unavailableTracks!: UnavailableTrack[] | null | undefined

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.spotifyService.getPlaylists().subscribe(value => {
      this.playlists = value.user_playlists
    })

  }

  getUnavailables(playlistId: string) {
    if (playlistId !== "default") {
      this.spotifyService.getUnavailables(playlistId).subscribe(value => {
        value.unavailable_tracks.length > 0 ? this.unavailableTracks = value.unavailable_tracks : this.unavailableTracks = null
      })
    } else {
      this.unavailableTracks = undefined
    }
  }

  playlistSelected(playlist: string) {
    alert(playlist)
  }
}
