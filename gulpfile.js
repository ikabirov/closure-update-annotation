const gulp = require('gulp');
const modify = require('gulp-modify');

function replaceContentsSync(file, content) {
	return content.replace(/(@type|@param|@return)([^?]*?)(\})/g, (match, prefix, value, postfix) => {
		value = value.replace(/([^!?a-zA-Z0-9.:_ ]\s*(?:\.\.\.)?)((?:[a-z]+[a-z.]*\.)?[A-Z]+[a-z])/g, '$1?$2');
		return `${prefix}${value}${postfix}`;
	})
}

gulp.task("default", () => {
	//const dir = 'c:\\!git\\flashspring\\flashspring\\htmlprojects\\libs\\closure\\closure';
	const dir = 'C:/!git/flashspring/flashspring/htmlprojects/src';
	//const filesMask = `${dir}\\**\\*.js`;
	const filesMask = `${dir}\\**\\TooltipManager.js`;
	return gulp.src(filesMask)
		.pipe(modify({
			fileModifier: replaceContentsSync,
		}))
		.pipe(gulp.dest(dir));
});
