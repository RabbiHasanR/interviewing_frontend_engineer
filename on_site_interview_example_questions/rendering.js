// requestAnimationFrame()

// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.

/*
    function moveElement(duration, distance, element) {}
*/

function moveElement(duration, distance, element) {
    const start = performance.now();

    function move(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        const amountToMove = progress * distance;

        element.style.tranform = `translateX(${ amountToMove }px)`;

        if (amountToMove < distance) {
            requestAnimationFrame(move)
        }
    }

    requestAnimationFrame(move)
}
