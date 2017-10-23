import { animate, state, style, transition, trigger } from '@angular/animations';

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
