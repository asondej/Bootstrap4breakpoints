class BS4breakpoints {
    constructor(delay = 350, prefix = "current breakpoint", ) {
        this.prefix = prefix;
        this.delay = delay;
        this.build();
        this.xl = document.querySelector("#BS4breakpoints .xl");
        this.lg = document.querySelector("#BS4breakpoints .lg");
        this.md = document.querySelector("#BS4breakpoints .md");
        this.sm = document.querySelector("#BS4breakpoints .sm");
        this.xs = document.querySelector("#BS4breakpoints .xs");
    }

    build() {

        let breakpoints = {
            xl: "d-none d-xl-block xl",
            lg: "d-none d-lg-block d-xl-none lg",
            md: "d-none d-md-block d-lg-none md",
            sm: "d-none d-sm-block d-md-none sm",
            xs: "d-block d-sm-none xs",
        }
        var parent = document.createElement("div");
        parent.id = "BS4breakpoints";
            for (const breakpoint in breakpoints) {

                let child = document.createElement("div");
                child.className = breakpoints[breakpoint]; 
                parent.appendChild(child);
            }
        document.body.appendChild(parent);
    }	
    detect() {
        if(window.getComputedStyle(this.xl).getPropertyValue("display") == "block") {
            console.log('%c Bootstrap 4 breakpoint ', 'background: #222; color: #bada55');
            console.log(this.prefix+": xl");
        } else if(window.getComputedStyle(this.lg).getPropertyValue("display") == "block") {
            console.log('%c Bootstrap 4 breakpoint ', 'background: #222; color: #bada55');
            console.log(this.prefix+": lg");
        } else if(window.getComputedStyle(this.md).getPropertyValue("display") == "block") {
            console.log('%c Bootstrap 4 breakpoint ', 'background: #222; color: #bada55');
            console.log(this.prefix+": md");
        } else if(window.getComputedStyle(this.sm).getPropertyValue("display") == "block") {
            console.log('%c Bootstrap 4 breakpoint ', 'background: #222; color: #bada55');
            console.log(this.prefix+": sm");
        } else if(window.getComputedStyle(this.xs).getPropertyValue("display") == "block") {
            console.log('%c Bootstrap 4 breakpoint ', 'background: #222; color: #bada55');
            console.log(this.prefix+": xs");
        }
    }

    log() {
        const func = (e) => this.detect();
        function throttled(delay, fn) {
                let lastCall = 0;
                    return function wrapper(...args) {
                        const now = (new Date).getTime();
                        if (now - lastCall < delay) {
                        return;
                        }
                        lastCall = now;
                        return fn(...args);
                    }
                }
        window.addEventListener("resize", throttled(this.delay, (e) => func(this.detect)));
        this.detect();
    }
}
