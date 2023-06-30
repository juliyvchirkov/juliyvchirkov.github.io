'use strict'

globalThis.addEventListener('load', () => {
    const gh = document.getElementById('gh')
    const listener = (evt) => {
        document.body.className = evt.type === 'mouseleave' ? '' : 'flat'

        if (evt.type === 'click') {
            evt.preventDefault()

            setTimeout(() => location.assign(gh.href), 500)
        }
    }

    ['click', 'mouseenter', 'mouseleave'].forEach((type) => gh.addEventListener(type, listener))
})
