/**
 * 
 * @param {string} id the id of the element you want to scroll to
 */

export const Scroller = (id) => {
    if (id) {
        const elem = document.getElementById(id);
        if (elem) {
            window.scrollTo({
                top: elem.offsetTop - 80,
                behavior: 'smooth',
            })
        }
        else {
            scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        }
    }
    else{
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }
}