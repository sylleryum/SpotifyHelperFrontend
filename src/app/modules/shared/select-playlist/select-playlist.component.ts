import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {UserPlaylists} from "../../../spotify.service";

@Component({
  selector: 'app-select-playlist',
  templateUrl: './select-playlist.component.html',
  styleUrls: ['./select-playlist.component.css']
})
export class SelectPlaylistComponent implements OnInit {
  @Input() playlists!: UserPlaylists[]
  @Output() playlistSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPlaylistSelected(playlistId:string){
    this.playlistSelected.emit(playlistId)
  }

}
