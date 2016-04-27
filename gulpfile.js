/**
 * Created by DaVer on 16/4/27.
 */
var zdw = require('./index.js');

var gulp = require('gulp');

gulp.task('test',function(){
	return gulp.src('app.js')
		.pipe(
			zdw([
				{
					parameName:'login',
					parameter:'0.0.1'
				},
				{
					parameName:'{{newAppVersion}}',
					parameter:'郑德伟'
				}
			])
		)
	　.pipe(gulp.dest('appnew.js'))
});