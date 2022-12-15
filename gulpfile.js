const { src, dest, task } = require('gulp')
const rm = require('gulp-rm');

const files = [
  'src/styles/one.scss',
  'src/styles/two.scss'
]

task('clean', () => {
  return src('dist/**/*', { read: false })
    .pipe(rm())
})

function copy() {
  return src(files).pipe(dest('dist'))
}

exports.copy = copy