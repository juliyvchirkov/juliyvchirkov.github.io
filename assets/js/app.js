'use strict'

addEventListener('load', () => {
    const container = document.getElementById('github')
    const events = ['touchstart', 'mouseenter', 'touchend', 'touchcancel', 'mouseleave']
    const listener = (event) => document.body.className[
        events.indexOf(event.type) < 2 ? 'add' : 'remove'
    ]('flat')

    for (const event of events) {
        container.addEventListener(event, listener)
    }
})
