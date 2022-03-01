const http = require('http') ;
var url1 = process.argv[2] ;
var url2 = process.argv[3] ;
var url3 = process.argv[4] ;



function GetData ( url, callback ) {
    http.get(url, (response) => {
        var str = '';
        response.on('data', (data) => {
            str += data.toString();
        })
        response.on('error', (error) => {
            callback(error) ;
        }) ;
        response.on('end', () => {
            callback(null, str);
        })
    });
}

GetData (url1, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        GetData (url2, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                GetData (url3, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});