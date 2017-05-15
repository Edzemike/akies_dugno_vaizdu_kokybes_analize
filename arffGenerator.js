function arffGenerate(data) {
    const date = new Date();
    var element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(
        '% Retinal image quality assessment' + '\n' +
        '% Date: ' + date + '\n' + '\n' +
        '@attribute cm1 numeric' + '\n' +
        '@attribute cm2 numeric' + '\n' +
        '@attribute cm3 numeric' + '\n' +
        '@attribute f1 numeric' + '\n' +
        '@attribute f2 numeric' + '\n' +
        '@attribute f3 numeric' + '\n' +
        '@attribute im1 numeric' + '\n' +
        '@attribute im2 numeric' + '\n' +
        '@attribute im3 numeric' + '\n' +
        '@attribute im4 numeric' + '\n' +
        '@attribute ct1 numeric' + '\n' +
        '@attribute ct2 numeric' + '\n' +
        '@attribute ct3 numeric' + '\n' +
        '@attribute ct4 numeric' + '\n' +
        '@attribute colorQuality     {normal,dark,bright}' + '\n' +
        '@attribute focusQuality     {good,normal,bad}' + '\n' +
        '@attribute ilumination      {even,uneven}' + '\n' +
        '@attribute contrast         {low,high}' + '\n' +
        '@attribute gradable         {gradable,ungradable}' + '\n' + '\n' +
        `@data` + '\n' +
        data
    ));
    element.setAttribute('download', 'rezultatai.arff');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function dataString (data){
    dataString = '';

    // data.forEach(function(element) {
    //     dataString += element + '\n';
    // }, this);
    return dataString + data;
}