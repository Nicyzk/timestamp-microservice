exports.postTimestamp = (req, res, next) => {
    const dateString = req.body.dateString
    res.redirect('/api/timestamp/' + dateString)
}

exports.getTimestampEmptyInput = (req, res, next) => {
    const responseObject = {}
    const dateObject = new Date()
    responseObject.unix = dateObject.getTime()
    responseObject.utc = dateObject.toUTCString()
    res.json(responseObject)
}

exports.getTimestampWithInput = (req, res, next) => {
    let dateInput = req.params.date
    const responseObject = {}

    if (dateInput.match(/-/)) {
        const dateObject = new Date(dateInput)
        responseObject.unix = dateObject.getTime()
        responseObject.utc = dateObject.toUTCString()
    } else {
        dateInput = parseInt(dateInput)
        const dateObject = new Date(dateInput)
        responseObject.unix = dateObject.getTime()
        responseObject.utc = dateObject.toUTCString()
    }

    if (!responseObject.unix || responseObject.utc === "Invalid Date") {
        return res.json({
            error: "Invalid Date"
        })
    }

    return res.json(responseObject)
}