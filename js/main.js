// let xhr = new XMLHttpRequest();
// let data;

// xhr.open("GET", "https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels&key=AIzaSyAOySuSdP6NVXz7LglBAl1sp1CHXrZeFqQ);
// xhr.send()

// function setData(jsonData) {
//     debugger;
//    data = jsonData;
//    console.log(data);
// }

// xhr.onreadystatechange = function() {

//    if (this.readyState == 4 && this.status == 200) {
//        setData(JSON.parse(this.responseText));
//    }
// };

// let url =
//   "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";

// let url =
//   "https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels&key=AIzaSyAOySuSdP6NVXz7LglBAl1sp1CHXrZeFqQ";
// let query = "hotel";
// let loc = "+paris";
// let key = "&key=AIzaSyAOySuSdP6NVXz7LglBAl1sp1CHXrZeFqQ";

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(JSON.parse(this.responseText));
//   }
// };

// xhr.open("GET", url);
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.setRequestHeader("Content-Encoding", "gzip");
// xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
// xhr.setRequestHeader("Access-Control-Allow-Credentials", true);

// xhr.send();

//Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  console.log(JSON.parse(text));
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels&key=AIzaSyAOySuSdP6NVXz7LglBAl1sp1CHXrZeFqQ";

  var xhr = createCORSRequest("GET", url);
  if (!xhr) {
    alert("CORS not supported");
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert("Response from CORS request to " + url + ": " + title);
  };

  xhr.onerror = function() {
    alert("Woops, there was an error making the request.");
  };

  xhr.send();
}
makeCorsRequest();