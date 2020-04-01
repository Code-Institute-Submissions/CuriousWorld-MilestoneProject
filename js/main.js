
var xhr = new XMLHttpRequest();
var url =
"https://api.foursquare.com/v2/venues/explore?client_id=A3ELKZDU1FE5AHJRUOOFNZSMBA4I1M0JXTS4EIHUQ2PNML3W&client_secret=1ATYJVZ14BROV0XZCKLSB3LESEVSTYH2P0L533MHJ1DI5FKE&v=20180323&limit=50&ll=48.8566, 2.3522&query=hotels";

function getAllData(url, callback) {
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.response);
        }
    }
    xhr.onerror = function() {
        alert("Woops, there was an error making the request.");
    };
    xhr.send();
}
getAllData(url, function(resp) {
    var data = JSON.parse(resp).response.groups[0].items;
    var list = Object.keys(data);
  
    for (let index = 1; index < list.length; index++) {
        
        if (list.length >= 4 && index < 4) {
        var randomIndex = Math.floor(Math.random() * list.length);
        var randomObject = data[list[randomIndex]];
        var hotelName = document.getElementById("hotels_insp_" + index);
        hotelName.innerHTML = randomObject.venue.name;

        var hotelId = randomObject.venue.id;
        console.log(hotelId)
        }
    }
});





window.addEventListener("load", function() {
//   console.log("All assets are loaded");
//     var options = {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0
//     };

//     function success(pos) {
//       var crd = pos.coords;

//       console.log('Your current position is:');
//       console.log(`Latitude : ${crd.latitude}`);
//       console.log(`Longitude: ${crd.longitude}`);
//       console.log(`More or less ${crd.accuracy} meters.`);
//     }

//     function error(err) {
//       console.log("error")
//         console.warn(`ERROR(${err.code}): ${err.message}`);
//     }

//     navigator.geolocation.getCurrentPosition(success, error, options);
});
