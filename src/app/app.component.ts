import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('rootPage => usersPage', [
        group([
          query(':enter', [
            // animateChild(),
            style({
              transform: 'translateY(-100%)',
              opacity: 0
            }),
            animate('400ms ease-out')
          ], { optional: true }),
          query(':leave', [
            animate('400ms ease-in', style({
              transform: 'translateX(100%)',
              opacity: 0
            }))
          ], { optional: true })
        ])
      ]),

      transition('usersPage => rootPage', [
        group([
          query(':enter', [
            // animateChild(),
            style({
              transform: 'translateX(-100%)',
              opacity: 0
            }),
            animate('400ms ease-out')
          ], { optional: true }),
          query(':leave', [
            animate('400ms ease-in', style({
              transform: 'translateY(100%)',
              opacity: 0
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {

  getAnimationsData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }
}
