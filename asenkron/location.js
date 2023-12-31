var request = require("request");
var url = "http://ipinfo.io";

module.exports = function (/*callback*/) {
    return new Promise(function(resolve, reject){
        request({
            url : url,
            json : true
        }, function (error ,response, body) {
    
            if(error){
                reject();
            } else {
                resolve(body);
            }
    
        });
    })
    
    
    /*
    request({
        url : url,
        json : true
    }, function (error ,response, body) {

        if(error){
            callback();
        } else {
            callback(body);
        }

    });
    */
}