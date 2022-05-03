import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthService {
  constructor() {}

  generateAuthUrl() {
    let url = environment.spotify_auth_url;
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(environment.client_id);
    url += '&scope=' + encodeURIComponent(environment.scopes);
    url += '&redirect_uri=' + encodeURIComponent(environment.redirect_uri);
    url += '&state=' + encodeURIComponent('state');

    return url;
  }
}
