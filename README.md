# Calling File

Sometimes you want to know the path (or directory) of the file that called the function you are in. Calling file makes use of [callsites](https://www.npmjs.com/package/callsites) to provide that path.

## Installation

~~~bash
$ npm install calling-file
~~~

## Use

~~~javascript
// ./a.js
const callingFile = require('calling-file');

module.exports = () => {
	console.log(callingFile());
}
~~~

~~~javascript
// ./b.js
const a = require('./a.js');

a(); // '/Users/someone/project/b.js'
~~~

These files are provided in `example` directory. You can run `node example/b.js` and get it's full path.

~~~bash
$ node example/b.js
/Users/someone/projects/node/calling-file/example/b.js
~~~

### callingFile([options])

#### options

##### dir

Type: boolean

Indicates that the directory of the calling file should be returned rather than the calling file itself. This can be useful in conjunction with [resolve-from](https://www.npmjs.com/package/resolve-from) and other APIs that expect a directory.

_Note: setting the **dir** flag does not effect how file paths are matched in any way._ The directory of the calling file path is calculated **after** the calling file has been determined.

##### ignore

Type: Array of file paths

Indicates that the listed paths should be ignored when determining the calling path. This can be useful when you know certain modules in the call stack but want to know the file that called them.

## Similar Modules

+ [caller-callsite](https://www.npmjs.com/package/caller-callsite) - Sindre Sorhus's implementation of a similar feature
+ [parent-module](https://www.npmjs.com/package/parent-module) - one potential use of a module like this, again by Sindre Sorhus
+ [intercept-require](https://www.npmjs.com/package/intercept-require) - has some similar code embedded in it for determining which file is calling `require()`

## License

Copyright (c) 2017 Aaron Madsen

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.