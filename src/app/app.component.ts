import {Component} from '@angular/core';
import {SpotifyService} from "./spotify.service";
import {BehaviorSubject} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>

  constructor(private spotifyService: SpotifyService, private modalService: NgbModal) {
    this.signedin$ = this.spotifyService.signedin$
  }

  ngOnInit(){
    this.spotifyService.checkAuth().subscribe(()=>{})
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
