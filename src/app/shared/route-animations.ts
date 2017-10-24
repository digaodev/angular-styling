import { transition, trigger, style, animate } from '@angular/animations';

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(400)
  ]),

  transition(':leave',
    animate(400, style({
      opacity: 0
    }))
  )
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(-100%)'
    }),
    animate(400)
  ]),

  transition(':leave',
    animate(400, style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  )
]);