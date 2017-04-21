$(document).ready(function() {

// The event listener for the file upload
document.getElementById('txtFileUpload').addEventListener('change', upload, false);

// Method that checks that the browser supports the HTML5 File API
function browserSupportFileUpload() {
    var isCompatible = false;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
    isCompatible = true;
    }
    return isCompatible;
}

// Method that reads and processes the selected file
function upload(evt) {
    if (!browserSupportFileUpload()) {
        alert('The File APIs are not fully supported in this browser!');
        } else {
            var data = [];
            var file = evt.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function(event) {
                var csvData = event.target.result;
                data = $.csv.toArrays(csvData);
                if (data && data.length > 0) {
                alert('Imported ' + (data.length -1) + ' names successfully!');
                for (var i = 1; i < data.length; i++) {
                  console.log('name: ' + data[i][0] + '\nemail: ' + data[i][1] + '\n');
                  $('#user-chart').append('<tr><td>' + data[i][0] + '<td>' + data[i][1] + '</td></tr>')
                }
                debugger;
                } else {
                    alert('No data to import!');
                }
            };
            reader.onerror = function() {
                alert('Unable to read ' + file.fileName);
            };
        }
    }
});

function Person(name, email, mobile){
    this.name = name;
    this.email = email;
    this.mobile = mobile;
  console.log(Person);
}
