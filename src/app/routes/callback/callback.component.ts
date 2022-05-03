import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    const fragment = new URLSearchParams(this.route.snapshot.fragment || '');

    if (fragment.has('access_token')) {
      const access_token = fragment.get('access_token') as string;
      localStorage.setItem(
        `${environment.prefix}-access_token`,
        JSON.stringify(access_token)
      );
    } else if(fragment.has('error')){
      const error = fragment.get('error') as string;
      console.log(error);
    }
  }

  ngOnInit(): void {}
}
