
var through = require('through2');


module.exports = function(options){
	return through.obj(function(file,enc,cb){
		options = options || [];
		if(file.isNull()){
			this.push(file);
			return cb();
		}

		if(file.isStream()){

			return cb();
		}
		var content = file.contents.toString();

		for(var i = 0;i<options.length;i++){
			var WV = options[i].parameName;
			var r = new RegExp(WV,'g');
			content = content.replace(r,options[i].parameter);
		}
		file.contents = new Buffer(content);
		this.push(file);

		cb();
	})
};

