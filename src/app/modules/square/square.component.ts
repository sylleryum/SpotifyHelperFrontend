import {Component} from '@angular/core';
import {faSpotify} from '@fortawesome/free-brands-svg-icons';
import {SpotifyService} from "../../spotify.service";

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  faSpotify = faSpotify;

  constructor(private spotifyService: SpotifyService) {
  }

  login() {
    this.spotifyService.getAuthorizationUrl().subscribe(value => {
      window.location.replace(value.url)
    });
  }

  me() {
    this.spotifyService.checkAuth().subscribe(value => {
      console.log(value)
    });
  }


}
