import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private url = 'https://api.spotify.com/v1/';
  private headers?: HttpHeaders;
  private authToken?: string;

  constructor(private http: HttpClient) {
    if (
      !localStorage.getItem(`${environment.prefix}-access_token`) ||
      localStorage.getItem(`${environment.prefix}-access_token`) === ''
    ) {
      localStorage.clear();
    } else {
      this.authToken = JSON.parse(
        localStorage.getItem(`${environment.prefix}-access_token`)!
      );
      this.headers = new HttpHeaders({
        Authorization: `Bearer ${this.authToken}`,
      });
    }
  }

  private buildRequest() {
    return;
  }

  get profile() {
    return this.http.get(this.url + 'me', { headers: this.headers });
  }

  get topArtists() {
    return this.http.get(
      this.url + 'me/top/artists' + '?limit=50&time_range=long_term',
      { headers: this.headers }
    );
  }

  get topTracks() {
    return this.http.get(
      this.url + 'me/top/tracks' + '?limit=50&time_range=long_term',
      { headers: this.headers }
    );
  }
}
