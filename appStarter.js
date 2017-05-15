const exec = require('child_process').execFile;

let results = "";

let child = exec('./Release/Test_openCV.exe');

function getOutput(callback) {
    console.log("Loading..");

    child.stdout.on('data', function (data) {
        results += data;
        console.log(data);
    });

     child.on('close', function () {
        callback(null, results);
        
    });

    child.on('exit', function () {
        console.log('exe done');
    });
    
}

module.exports = {
    getOutput
};
