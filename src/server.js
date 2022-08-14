var myPythonScriptPath = 'src/app.py';

// Use python shell
var {PythonShell} = require('python-shell');
var pyshell = new PythonShell(myPythonScriptPath);
var ansr = [0, 0];

pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    // console.log(typeof(message));
    // console.log(message)

    if(message == 'True' || message == 'False') {

        console.log(message)

        if(message == 'True') {
            ansr[0]++;
        }
        if(message == 'False') {
            ansr[1]++;
        }
        
    }

});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
    if (err){
        throw err;
    };

    console.log('-------');
    console.log('true: ' + ansr[0]);
    console.log('false: ' + ansr[1]);
});