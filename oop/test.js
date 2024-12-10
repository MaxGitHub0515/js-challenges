/* Build a Debounce and Throttle Function
Task: Write two functions debounce(fn, delay) and throttle(fn, interval) to control how often a function is executed in response to events.
Hint: Use setTimeout for debouncing and timestamps for throttling.
*/

const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay)
    }
}

const Resize = debounce(function() {
    console.log(this.innerWidth);
}, 300);

window.addEventListener('resize', onresize);


const throttle = (func, interval) => {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        const subtract = now - lastTime;
        if (subtract >= interval) {
            lastTime = now;
            func.apply(this, args)
        }
    }
}

const onScroll = throttle(() => {
    console.log("Throttled");
}, 300);

window.addEventListener('scroll', onScroll)


const People = {
    credentials: {
        creditCard: {
            pin: 21443,
            number: '543234 433423 43343',
        },
        userID: 433253,
        location: {
            postCode: '323 - 433',
            street: 'Avenue Street 3A '
        }
    }
}