var city = [
    {
        "_id": 1,
        "city_name": "Delhi"
    },
    {
        "_id": 3,
        "city_name": "Pune"
    },
    {
        "_id": 2,
        "city_name": "Mumbai"
    },
    {
        "_id": 4,
        "city_name": "Chandigarh",
    },
    {
        "_id": 5,
        "city_name": "Goa"
    },
    {
        "_id": 6,
        "city_name": "Manali"
    }
]

var getCity = () => {
    console.log(">>>>hi")
    for(i=0;i<city.length;i++){
        var element = document.createElement('option'); // <option></option>
        var text = document.createTextNode(city[i].city_name); // delhi
        element.appendChild(text) // <option>delhi</option>
        document.getElementById('citydrop').appendChild(element)
    }
}