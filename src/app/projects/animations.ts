import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const markedTrigger = trigger('markedTrigger', [
  state('default', style({
    'background-color': '#eee',
    'box-shadow': '0 0 4px 1px #ccc',
    'transform': 'scale(1)'
  })),
  state('marked', style({
    'background-color': 'lightblue',
    'box-shadow': '0 4px 2px rgb(163, 212, 255)',
    'transform': 'scale(1.02)'
  })),
  transition('default <=> marked', animate(250))
]);

export const itemTrigger = trigger('itemTrigger', [
  transition('void => *', [ // or :enter
    animate('600ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(5%)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ])),
  ]),

  transition('* => void', [ // or :leave
    animate('600ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(-5%)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ])
]);
