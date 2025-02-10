
# Why Playwright instead of React Testing Library

<!-- cSpell:ignore svish -->

[Reddit discussion: Why Playwright instead of React Testing Library](https://www.reddit.com/r/reactjs/comments/13rj2du/playwright_component_testing_vs_react_testing/)

- Will using it give you actual value? Then use it. If not, then don't.
  Storybook is great for some, we had it, but it didn't really give us much value, and it was yet another thing we had to maintain, so we cut it. -- [svish](https://www.reddit.com/user/svish/)

- Interesting comment but both Playwright Component Testing and RTL make sense and are very similar. Both mount components and let you test components.
  The main difference is that **Playwright does it in a browser, RTL in jsdom.**
  Playwright gives you feedback in a browser, RTL in your terminal. -- OP

- Yeah, many tools are very similar, and then it often just boils down to which one you prefer, how do you prefer to work.
  **I like being able to run things in different browser versions**, and to have a UI, so Playwright is what seems best for us. -- [svish](https://www.reddit.com/user/svish/)
