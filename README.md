# React Calculator

For today's lab, you are going to build a calculator, much like the one you built [on Week 2, Day 3](https://github.com/momentum-cohort-2018-07/lab-w2d3), except this time you will use React to build it.

There is one major change: you should add a display that shows all previous calculations you have done. For example, if you calculated `3 + 4` and then added 2 to that total, then cleared the result and calculated `10 * 2`, your previous results display would look like:

```
3 + 4 = 7
7 + 2 = 9
10 * 2 = 20
```

Before you build out any code, take time to plan your calculator. You should think about what components you will build and what props and state they will have. Use the following space to write up these plans. The lab is not complete without this information.

## TODO: calculator plan

Components: 
-App
  State: input, history
-Calculator
  props: onClick, input, history
-Display
  props: input
-CalButton
  props: value, onClick
