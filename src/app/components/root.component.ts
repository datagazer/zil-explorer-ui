import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoadingService } from '@zilliqa/foundation';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  public constructor(
    private readonly $router: Router,

    private readonly $loading: LoadingService
  ) {}

  /** @implements OnInit */
  public ngOnInit(): void {
    this.$loading.register(
      this.$router.events.pipe(filter((event) => event instanceof NavigationStart)),

      merge(
        this.$router.events.pipe(filter((event) => event instanceof NavigationEnd)),
        this.$router.events.pipe(filter((event) => event instanceof NavigationCancel)),
        this.$router.events.pipe(filter((event) => event instanceof NavigationError))
      )
    );
  }
}
