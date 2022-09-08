import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  state,
  transition,
  trigger
} from "@angular/animations";

export const listAnimation = trigger("listAnimation", [
  transition("* => *", [
    // each time the binding value changes
    query(":leave", [stagger(500, [animate("0.5s", style({ opacity: 0 }))])], {
      optional: true
    }),
    query(
      ":enter",
      [
        style({ opacity: 0 }),
        stagger(500, [animate("0.5s", style({ opacity: 1 }))])
      ],
      { optional: true }
    )
  ])
]);

export const actionAnimation = trigger("actionAnimation", [
  state(
    "orig",
    style({
      transform: "scale(1)",
      opacity: 1
    })
  ),
  state(
    "small",
    style({
      transform: "scale(0.75)",
      opacity: 0.3
    })
  ),
  transition("* => *", animate("500ms ease-in-out"))
]);
