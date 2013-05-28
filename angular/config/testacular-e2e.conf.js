basePath = '../app';

files = [
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'lib/jquery/jquery-1.9.1.min.js',
    'lib/jquery/jquery-ui-1.10.1.custom.min.js',
    'lib/underscore/underscore-min.js',
    'lib/angular/dev/angular.js',
    'lib/angular/dev/angular-resource.min.js',
    'lib/angular-ui/angular-ui-ieshiv.min.js',
    'lib/angular-ui/angular-ui.js',
    '../test/lib/angular/angular-mocks.js',
    'lib/bootstrap/js/bootstrap.min.js',
    'js/**/*.js',
    '../test/e2e/**/*.js',
    'partials/**/*.html'
];
// list of files to exclude
exclude = [];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit'
// CLI --reporters progress
reporters = ['progress'];

// web server port
// CLI --port 9876
port = 9876;

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
// CLI --log-level debug
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
//browsers = ['Chrome', 'Firefox', 'Safari'];
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 5000;

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = true;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;

// compile coffee scripts
preprocessors = {
    '**/*.coffee': 'coffee',
    '**/*.html': 'html2js'
};

proxies = {
    '/': 'http://localhost:8000/'
};

junitReporter = {
    outputFile: '../test_out/e2e.xml',
    suite: 'e2e'
};
