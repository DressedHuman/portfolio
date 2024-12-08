/* export const Scroller = (id?: string) => {
    if (id) {
        const elem = document.getElementById(id);
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80,
                behavior: 'smooth',
            });
        }
        else {
            scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
    }
    else{
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
} */

export const Scroller = (elem: string, duration?: number, easing: "easeInOutCubic" | "linear" = "easeInOutCubic"): void => {
    if(duration===undefined) duration = 500;
    if(easing===undefined) easing = "easeInOutCubic";
    if (elem) {
        const target = document.querySelector(elem);
        if (target) {
            const start = window.scrollY || window.pageYOffset; // currrent scroll position
            const targetPosition = target.getBoundingClientRect().top + start - 80;
            const distance = targetPosition - start;
            let startTime: number | null = null;

            // Easing Functions
            const easings = {
                easeInOutCubic: (t: number) => {
                    return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
                },
                linear: (t: number) => {
                    return t;
                },
            };


            const animateScroll = (currentTime: number) => {
                if (startTime===null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed/duration, 1)
                const scrollAmount = start + easings[easing](progress)*distance;

                window.scrollTo(0, scrollAmount);
                if(timeElapsed<duration) return requestAnimationFrame(animateScroll);
            };

            requestAnimationFrame(animateScroll);
        }
    }
}