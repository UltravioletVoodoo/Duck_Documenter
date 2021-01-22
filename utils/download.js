const converter = require('json-2-csv')

export default function download(downloadObject) {
    converter.json2csvAsync(downloadObject).then(csv => {
    console.log(csv)
    downloadAsCSV('surveys.csv', csv)
    }).catch(error => console.log(error))
}

function downloadAsCSV(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}