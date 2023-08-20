const tripsData = [
    {
        "title": "Northern Lights Explorer",
        image: "assets/image 117.png",
        origin: "Norway",
        price: "",
        details: [
            "22 Day Expedition 120 Guests",
            "Departure on Sep 01-Sep 22, 2023",
            "Departure on Sep 08-Sep 26, 2024",  
        ]
    },
    {
        title: "7 Night Alaska Cruise",
        image: "assets/image 118.png",
        origin: "Bergen",
        price: "",
        details: [
            "Aug-28, 2023",
            "Sold Out",
            "Sold Out"
        ]
    },
    {
        title: "Christmas Expedition from London",
        image: "assets/image 119.png",
        origin: "Greenland",
        price: "",
        details: [
            "A 15 Day Expedition 500 Guests",
            "Departure on Dec-23, 2023. Jan-06 2024",
            "Sold Out"
        ]
    },
    {
        title: "Northern Lights Expedition Cruise",
        image: "assets/image 120.png",
        origin: "Iceland",
        price: "",
        details: [
            "A 15 Day Expedition 500 Guests",
            "Departure on Sep 30, 2023- Oct 14, 2023",
            "Departure on Dec 09, 2023- Dec 23, 2023"
        ]
    },
    {
        title: "North Cape Express. Bergen To Oslo",
        image: "assets/image 121.png",
        origin: "North Cape",
        price: "",
        details: [
            "Sep 25, 2023- Oct 09, 2023",
            "Oct 19, 2023- Nov 02, 2023",
            "Nov 12, 2023- Nov 26, 2023"
        ]
    },
    {
        title: "Sail With The Vikings Cruise",
        image: "assets/image 122.png",
        origin: "Alaska",
        price: "",
        details: [
            "Jul 20, 2024- Aug 01, 2024",
            "Sold Out",
            "Sold Out"
        ]
    },
];

$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://api.openweathermap.org/data/2.5/weather?q=" + tripsData + "&appid=41b26e7affbd77430542ddf86b8508b6",
        success:function(data){
            const temperature = data.main.temp;
            const tempPlaceholder = tripCard.querySelector(".temp-placeholder");
            tempPlaceholder.textContent = temperature + "°C";
            temp = data;
            console.log(temp.main.temp);
        }
    }).done(function(){

    })
})

function createTripCard(trip) {
    return `
    <div class="col">
        <div class="card h-100">
            <img src="${trip.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${trip.title}</h5>
            </div>
            <ul class="list-group list-group-flush">
                ${trip.details.map(detail => `<li class="list-group-item">${detail}</li>`).join("")}
            </ul>
        </div>
        <a href="${trip.link}" class="btn btn-primary mt-3">Book Now</a>
    </div>
`;
}

function filterTrips(originFilter, availabilityFilter) {
    const filteredTrips = tripsData.filter(trip => {
        const originMatch = originFilter === "All" || trip.origin === originFilter;
        const availabilityMatch = availabilityFilter === "All" || trip.details.includes(availabilityFilter);
        return originMatch && availabilityMatch;
    });
    return filteredTrips;
}

const originFilterSelect = document.getElementById("originFilter");
const availabilityFilterSelect = document.getElementById("availabilityFilter");
const tripCardsContainer = document.getElementById("tripCardsContainer");

originFilterSelect.addEventListener("change", updateDisplayedTrips);
availabilityFilterSelect.addEventListener("change", updateDisplayedTrips);

function updateDisplayedTrips() {
    const selectedOrigin = originFilterSelect.value;
    const selectedAvailability = availabilityFilterSelect.value;
    const filteredTrips = filterTrips(selectedOrigin, selectedAvailability);

    tripCardsContainer.innerHTML = "";
    filteredTrips.forEach(trip => {
        const tripCard = createTripCard(trip);
        tripCardsContainer.innerHTML += tripCard;
    });
}

updateDisplayedTrips();

tripsData.forEach(trip => {
    const tripCard = createTripCard(trip);
    tripCardsContainer.innerHTML += tripCard;
});

const weatherLink = document.querySelector(".nav-link[data-bs-toggle='dropdown']");
weatherLink.addEventListener("click", () => {
   
    const origin = "Norway"; 

    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + origin + "&appid=41b26e7affbd77430542ddf86b8508b6",
        success: function(data) {
            const weatherContainer = document.getElementById("weatherContainer");
            weatherContainer.innerHTML = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        },
        error: function() {
            const weatherContainer = document.getElementById("weatherContainer");
            weatherContainer.innerHTML = "<p>Failed to fetch weather data.</p>";
        }
    });
});

    document.addEventListener("DOMContentLoaded", function () {
        const tripsData = [
            {
                title: "Northern Lights Explorer",
                image: "assets/image 117.png",
                origin: "Norway",
                price: "",
                details: [
                    "22 Day Expedition 120 Guests",
                    "Departure on Sep 01-Sep 22, 2023",
                    "Departure on Sep 08-Sep 26, 2024",  
                ]
            },
            {
                title: "7 Night Alaska Cruise",
                image: "assets/image 118.png",
                origin: "Bergen",
                price: "",
                details: [
                    "Aug-28, 2023",
                    "Sold Out",
                    "Sold Out"
                ]
            },
            {
                title: "Christmas Expedition from London",
                image: "assets/image 119.png",
                origin: "Greenland",
                price: "",
                details: [
                    "A 15 Day Expedition 500 Guests",
                    "Departure on Dec-23, 2023. Jan-06 2024",
                    "Sold Out"
                ]
            },
            {
                title: "Northern Lights Expedition Cruise",
                image: "assets/image 120.png",
                origin: "Iceland",
                price: "",
                details: [
                    "A 15 Day Expedition 500 Guests",
                    "Departure on Sep 30, 2023- Oct 14, 2023",
                    "Departure on Dec 09, 2023- Dec 23, 2023"
                ]
            },
            {
                title: "North Cape Express. Bergen To Oslo",
                image: "assets/image 121.png",
                origin: "North Cape",
                price: "",
                details: [
                    "Sep 25, 2023- Oct 09, 2023",
                    "Oct 19, 2023- Nov 02, 2023",
                    "Nov 12, 2023- Nov 26, 2023"
                ]
            },
            {
                title: "Sail With The Vikings Cruise",
                image: "assets/image 122.png",
                origin: "Alaska",
                price: "",
                details: [
                    "Jul 20, 2024- Aug 01, 2024",
                    "Sold Out",
                    "Sold Out"
                ]
            },
        ];

        const filterForm = document.getElementById("filterForm");
        const tripsContainer = document.querySelector(".row-cols-md-3");

        filterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const selectedOrigin = document.querySelector('input[name="origin"]:checked').value;
            const selectedType = document.querySelector('input[name="type"]:checked').value;

            const filteredTrips = tripsData.filter(trip => 
                (selectedOrigin === "all" || trip.origin === selectedOrigin) &&
                (selectedType === "all" || trip.type === selectedType)
            );

            displayTrips(filteredTrips);
        });

        function displayTrips(trips) {
            tripsContainer.innerHTML = "";

            trips.forEach(trip => {
                const tripCard = createTripCard(trip);
                tripsContainer.innerHTML += tripCard;
            });
        }
    });

