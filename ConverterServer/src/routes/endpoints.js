
konverter = require('../utils/konverter')

module.exports = function(app){

    app.post('/jarak', (req, res) => {
        val     = req.body.val
        from    = req.body.from
        to      = req.body.to

        hasil = konverter.convert_jarak(from, to, val)
        res.send({hasil: hasil})
    })

    app.post('/waktu', (req, res) => {
        val     = req.body.val
        from    = req.body.from
        to      = req.body.to

        hasil = konverter.convert_waktu(from, to, val)
        res.send({hasil: hasil})
    })

    app.post('/massa', (req, res) => {
        val     = req.body.val
        from    = req.body.from
        to      = req.body.to

        console.log(req.body)
        hasil = konverter.convert_massa(from, to, val)
        res.send({hasil: hasil})
    })

    app.post('/energi', (req, res) => {
        val     = req.body.val
        from    = req.body.from
        to      = req.body.to

        hasil = konverter.convert_energi(from, to, val)
        res.send({hasil: hasil})
    })

    app.post('/kecepatan', (req, res) => {
        val     = req.body.val
        from    = req.body.from
        to      = req.body.to

        hasil = konverter.convert_kecepatan(from, to, val)
        res.send({hasil: hasil})
    })

    app.post('/temperatur', (req, res) => {
        val     = req.body.val
        from    = req.body.from
        to      = req.body.to

        hasil = konverter.convert_temperatur(from, to, val)
        res.send({hasil: hasil})
    })

    app.post('/gaya', (req, res) => {
        val     = req.body.val
        from    = req.body.from
        to      = req.body.to

        console.log(req.body)
        hasil = konverter.convert_gaya(from, to, val)
        res.send({hasil: hasil})
    })
}