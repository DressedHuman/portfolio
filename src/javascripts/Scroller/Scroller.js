/**
 * 
 * @param {string} id the id of the element you want to scroll to
 */

export const Scroller = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
        const elemCoords = elem.getBoundingClientRect();
        scrollTo({
            top: elemCoords.y - 80,
            left: elemCoords.x,
            behavior: 'smooth',
        })
    }
    else{
        scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    }
}