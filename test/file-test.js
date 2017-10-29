const test = require('tape');
const path = require('path');
const callsites = require('callsites');

const callingFile = require('../');

const aCallingFile = require('./support/a-calling-file.js');
const expectedPath = require.resolve('./support/a-calling-file.js');
const expectedDir = path.dirname(expectedPath);

test(
  'Reports full path of file that called a function using callingFile',
  (t) => {
    const fullPath = aCallingFile();
    t.equals(
      fullPath,
      expectedPath,
      'The full path is returned'
    );

    t.end();
  }
);

test(
  'Reports full directory of file that called a function using callingFile',
  (t) => {
    const fullDir = aCallingFile({ dir: true });
    t.equals(
      fullDir,
      expectedDir,
      'The full directory is returned'
    );
    
    t.end();
  }
);

test(
  'Reports the first full path of a calling file that is not ignored',
  (t) => {
    const fullPath = aCallingFile({ ignore: [expectedPath] });
    t.equals(
      fullPath,
      __filename,
      'The expected path is returned'
    );
    
    t.end();
  }
);

test(
  'Reports the directory of the first full path of a calling file that is not ignored',
  (t) => {
    const fullDir = aCallingFile({ dir: true, ignore: [expectedPath] });
    t.equals(
      fullDir,
      __dirname,
      'The expected directory path is returned'
    );
    
    t.end();
  }
);

test(
  'Reports undefined if all calling files are ignored',
  (t) => {
    const tapePaths = callsites().map((site) => site.getFileName());

    const fullDir = aCallingFile({
        ignore: [
            expectedPath,
            __filename,
            ...tapePaths
        ]
    });
    t.equals(
      fullDir,
      undefined,
      'The expected undefined is returned'
    );
    
    t.end();
  }
);
