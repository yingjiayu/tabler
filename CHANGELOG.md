# Changelog

All notable changes to this project will be documented in this file.


## `1.0.0-beta` - 2021-02-17

**Initial beta release of Tabler v1.0! Lots more coming soon though 😁**

- update Bootstrap to 5.0.0-beta2
- update other dependencies.


## `1.0.0-beta2` - 2021-03-29

- update dependencies
- `li` marker fix
- page wrapper, nav fixes
- scripts optimize, remove `capture_once`
- `page-body` fixes
- layout navbar fix
- typography fix
- ribbon fix
- charts label fixes
- charts docs


## `1.0.0-beta3` - 2021-05-08

- upgrade Bootstrap to 5.0
- upgrade dependencies
- change `$border-radius-pill` variable
- badge vertical align fix


## `1.0.0-beta4` - 2021-10-24

- upgrade required node.js version to 14
- upgrade Bootstrap to 5.1
- upgrade dependencies
- fix #775  litepicker not initializing
- fix `nouislider` import in dev


## `1.0.0-beta5` - 2021-12-07

**Tabler has finally lived to see dark mode! 🌝🌚**

- **Dark mode enabled!**
- add more cursors (#947)
- fix #892 - Media queries need to be nested when negating
- update `@tabler/icons` to newest version
- move optional dependencies to peerDependencies (#924)
- move deployment to Github Actions (#934)
- table border fixes
- antialiased fix
- update `@tabler/icons` to version 1.42
- change default font to 'Inter'
- colors unify
- add `tom-select` and remove `choices.js`


## `1.0.0-beta6` - 2022-01-18

- pricing cards fix
- fix bug `fw-...`, `.fs-...` is missed (#987)
- avatar class fix
- fix bug #903 `litepicker` with date range not having correct border
- page wrapper fix
- fix #900 `is-invalid-lite` class is not working under `was-validated` form class
- update `@tabler/icons` to version 1.48
- fix #960 - Badges not honoring font sizes
- fix #959 - `node-sass` does not properly compile nested media queries
- update package dependencies to newest version


## `1.0.0-beta7` - 2022-02-05

- fix: #1019 - project-overview.html link not working
- fix: #1010 - card with bottom tabs has incorrect border radius
- uptime monitor mobile fixes
- navbar dark button fix
- `tabler-icons` link
- autoloading webfonts
- cards fixes, new cards demos
- ruby dependencies update
- RTL stylesheet fixes
- new card action demos


## `1.0.0-beta8` - 2022-02-05

- update dependencies
- new vector maps demos
- fixes update map on resize
- docs improvement
- replace `badge` with `status-dot` in `navbar-notifications.html`
- map tooltip fixes


## `1.0.0-beta9` - 2022-02-26

- fix: #1061 - list group item colors in light and dark modes
- new `tasks` dashboard
- fix: #1059 - upload button in form element in dark view has problem
- fix: #1052 - card background icon is practically invisible
- remove Inter font and use default font system stack
- fix: #1018 - vector map not working
- fix: #1035 - wrong background color of hovered list group items in dark mode
- dependencies update
- add `font-display: swap;` to improve font loading
- new `Boxed` layout


## `1.0.0-beta10` - 2022-04-29

- new `datatable` component
- update Tabler Icons to v1.67
- fix: #1024 - fix Tom-select in dark mode
- new carousel indicators: dots, vertical, thumbs (#1101)
- replace !important modifier with more specific selectors (#1100)
- new `FAQ` page


## `1.0.0-beta11` - 2022-07-05

- new `Dropzone` component
- new `Lightbox` component
- new `TinyMCS` component
- new `Inline Player` component
- new `Pricing table` component
- new `Datagrid` component
- new optgroup form examples
- new settings page
- update Tabler Icons to v1.78
- added popover docs page
- fix: #1125 incorrect chart display in the mobile version
- update Bootstrap to 5.2.0


## `1.0.0-beta12` - 2022-09-19

- new "Job listing" page
- new "Sign in with cover" page
- new "Logs" page
- new `progressbg` component
- add a lot of CSS variables
- add Dockerfile with alpine base
- add icon pulse/tada/rotate animations
- use :host in selectors to support Web Components
- use dark table variant colors in dark mode (#1200)
- update Tabler Icons to v1.96
- change `space-y` component
- headings, shadows and borders unify
- toggle TinyMCE dark mode and skin based on the set Tabler theme
- fix `card-footer` background
- fix headers weight
- fix transparent hover background in pagination
- fix dark mode card text color
- fix `--#{$prefix}card-bg` is undefined
- fix global variable for `.card` and `.btn`
- fix code sample in the customize tabler docs
- fix form elements demo page radio buttons
- replace `gulp-minify` with `gulp-terser`
