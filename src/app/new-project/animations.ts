import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
  state('valid',
    style({
      'background-color': 'green',
      'color': 'white'
    })
  ),
  state('invalid',
    style({
      'background-color': 'red',
      'color': 'white'
    })
  ),
  transition('invalid => valid', [
    group([
      animate(100, style({
        transform: 'scale(1.1)'
      })),
      animate(200, style({
        'background-color': 'green'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    }))
  ])
]);
