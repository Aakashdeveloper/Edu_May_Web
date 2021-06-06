var url = "https://developerfunnel.herokuapp.com/location";
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city=";
var tripType = "https://developerfunnel.herokuapp.com/booking";

var getCity = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement('option'); // <option></option>
            var text = document.createTextNode(data[i].city_name); // delhi
            element.appendChild(text) // <option>delhi</option>
            element.value = data[i]._id  // <option value="1">delhi</option>
            document.getElementById('citydrop').appendChild(element)
        }
    })
}

var getHotel = () => {
   var CityId = document.getElementById('citydrop').value;
   var hotels = document.getElementById('hotels');
   while(hotels.length>0){
       hotels.remove(0)
   }
   fetch(`${hotelUrl}${CityId}`)
   .then((res) => res.json())
   .then((data) => {
    for(i=0;i<data.length;i++){
        var element = document.createElement('option');
        var text = document.createTextNode(`${data[i].name} | ${data[i].city_name} `);
        element.appendChild(text)
        hotels.appendChild(element)
    }
   })

}

var getTrip = () => {
    fetch(tripType)
    .then((res) => res.json())
    .then((data) => {
        var output ='';
        for(i=0;i<data.length;i++){
            output += `<div class="tileContainer">
            <div class="tileComponent1">
               <img src="${data[i].image}" >
            </div>
            <div class="tileComponent2">
                <div class="componentHeading">
                    ${data[i].name}
                </div>
                <div class="componentSubHeading">
                    Start Your ${data[i].name} Trip with Us
                </div>
            </div>
        </div>`
        }

        document.getElementById('content').innerHTML = output
    })
}