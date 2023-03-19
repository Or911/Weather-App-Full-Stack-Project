moment = require ('moment')

const sortDate = function (data){
    data.time = moment(data.time).format("LLLL")
    return data.time
    
}

module.exports = sortDate