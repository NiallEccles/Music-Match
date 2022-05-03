import { Component } from '@angular/core';
import { SpotifyAuthService } from './services/spotify-auth/spotify-auth.service';
import { SpotifyService } from './services/spotify/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-match';

  constructor(public spotifyAuthService: SpotifyAuthService, private spotify: SpotifyService){
    console.log(this.spotifyAuthService.generateAuthUrl());
    // this.spotify.profile.subscribe((d)=>{
    //   console.log(d);
    // })
    // this.spotify.topArtists.subscribe((d)=>{
    //   console.log(d);
    // })
    // this.spotify.topTracks.subscribe((d)=>{
    //   console.log(d);
    // })
  }
}
