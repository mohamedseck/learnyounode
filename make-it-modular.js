var filterFn = require('./myModule');
var dir = process.argv[2]
var filter = process.argv[3]

filterFn(dir, filter, function (err, list) {
  if (err) {
      return console.error('There was an error:', err)
  }
  else {
  			list.forEach(function (file) {
    		console.log(file)
  		})
 	}
  
})