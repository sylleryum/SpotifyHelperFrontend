import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {REDIRECT_AFTER_AUTH} from './helper/literals'
import {tap, catchError} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  currentUser!: User;
  signedin$ = new BehaviorSubject<any>(false)

  // private ROOT_URL = 'http://localhost:8080/api/v1'
  private ROOT_URL = 'https://spotify-helper-backend.herokuapp.com/api/v1'
  private AUTHENTICATION_URL = '/authentication-url'
  private GET_USER = '/me'
  private USER_PLAYLISTS = '/playlists'
  private GET_UNAVAILABLE = '/get-unavailables/'
  private randomizeUrl = (playlistId: string) => `/order-playlist/${playlistId}/random`

  constructor(private http: HttpClient) {
  }

  /**
   * returns the endpoing to authenticate
   * @param redirectUrl optional, if omitted, REDIRECT_AFTER_AUTH (root path) is used
   */
  getAuthorizationUrl(redirectUrl = REDIRECT_AFTER_AUTH) {
//TODO use interceptor
    return this.http.get<{ url: string, traceId: string }>(this.ROOT_URL + this.AUTHENTICATION_URL +
      "?state=" + redirectUrl)
  }

  getPlaylists() {
    return this.http.get<UserPlaylistsWrapper>(this.ROOT_URL + this.USER_PLAYLISTS)
  }

  getUnavailables(playlistId: string) {
    return this.http.get<UnavailableTracksWrapper>(this.ROOT_URL + this.GET_UNAVAILABLE + playlistId)
      .pipe(catchError(err => {
        this.signedin$.next(false)
        return throwError(err.name + " - " + err.error.errorMessage);
      }))
  }

  checkAuth() {
    return this.http.get<User>(this.ROOT_URL + this.GET_USER)
      .pipe(
        tap((user) => {
          this.signedin$.next(true)
          this.currentUser = user

        }), catchError((err: NoAccessTokenException) => {
          this.signedin$.next(false);
          return throwError(err.name + " - " + err.error.errorMessage);
        })
      )
  }

  randomize(stringId: string) {
    return this.http.get<randomOrder>(this.ROOT_URL + this.randomizeUrl(stringId))
      .pipe(catchError(err => {
        this.signedin$.next(false)
        return throwError(err.name + " - " + err.error.errorMessage);
      }))

  }


}

//============interfaces

export interface Image {
  url: string;
}

export interface User {
  country: string;
  display_name: string;
  email: string;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface NoAccessTokenException {
  status: number,
  url: string,
  name: string,
  message: string,
  error: {
    errorMessage: string,
    traceId: string
  }
}

export interface UserPlaylistsWrapper {
  user_playlists: UserPlaylists[]
}

export interface UserPlaylists {
  name: string,
  id: string
}

export interface UnavailableTrack {
  uri: string;
  artist: string;
  name: string;
}

export interface UnavailableTracksWrapper {
  unavailable_tracks: UnavailableTrack[];
}

export interface randomOrder {
  "order": string,
  "playlist_name": string
}
