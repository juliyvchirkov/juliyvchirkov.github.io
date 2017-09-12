+function (d) {
    window.Promise && new Promise(function (r) { 
        d.readyState[0] == 'l' ? d.addEventListener('readystatechange', r) : r()
    }).then(function () {
        var a = d.getElementsByTagName('a')[0]
        'click enter leave'.split(' ').forEach(function (v) {
            a.addEventListener((v[0] == 'c' ? '' : 'mouse') + v, function (e) {
                /^c/.test(e.type) && (e.preventDefault(), setTimeout(function () { location.assign(a.href) }), 5e2),
                d.body.className = /e$/.test(e.type) ? '' : 'flat'
            })
        })
    })
}(document)