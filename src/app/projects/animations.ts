import { animate, keyframes, stagger, state, style, transition, trigger, query } from '@angular/animations';

export const markedStateTrigger = trigger('markedState', [
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

export const itemStateTrigger = trigger('itemState', [
  // transition('void => *', [ // or :enter
  //   animate('800ms ease-out', keyframes([
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100%)'
  //     }),
  //     style({
  //       opacity: 1,
  //       transform: 'translateX(5%)'
  //     }),
  //     style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })
  //   ])),
  // ]),

  // transition('* => void', [ // or :leave
  //   animate('700ms ease-in', keyframes([
  //     style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     }),
  //     style({
  //       opacity: 1,
  //       transform: 'translateX(-5%)'
  //     }),
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(100%)'
  //     })
  //   ]))
  // ]),

  transition('slidUp => slidDown', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('400ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),

  transition('slidDown => slidUp', [
    style({
      transform: 'translateY(0)'
    }),
    animate('400ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ])
]);

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('400ms ease-out', style({ transform: 'translateY(0)' }))
  ]),

  transition(':leave', [
    style({ transform: 'translateY(0)' }),
    animate('400ms ease-out', style({ transform: 'translateY(-100%)' }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(600, [
        animate('600ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        ]))
      ])
    ], { optional: true }),

    query(':leave', [
      // style({
      //   opacity: 0,
      //   transform: 'translateX(-100%)'
      // }),
      stagger(600, [
        animate('600ms ease-in', keyframes([
          style({
            opacity: 0,
            transform: 'translateX(100%)'
          })
        ]))
      ])
    ], { optional: true })
  ])

]);
