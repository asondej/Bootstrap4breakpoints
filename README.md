# Breakpoints4Bootstrap
Bootstrap 4 breakpoints detector.

Straightforward pure js class to detect current breakpoint and log it into console.


## How to use?

Include breakpoint_detector.js file, preferably at the bottom of your HTML document.

`<script src="breakpoint_detector.js"></script>`

Initialize  script like this:
```
document.addEventListener("DOMContentLoaded", function() {
  let breakpoint = new BS4breakpoints();
  breakpoint.log();
});
```


## Settings

BS4breakpoints( **delay_time** (int), **log_prefix** (string) );

**delay** - throtting in ms. Dafault is 350.<br>
**log_prefix** - text to display before breakpoint's name. Default is "current breakpoint".

