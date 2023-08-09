const tripsData = [
    {
        title: "Northern Lights Explorer",
        image: "assets/image 117.png",
        details: [
            "22 Day Expedition 120 Guests",
            "Departure on Sep 01-Sep 22, 2023",
            "Departure on Sep 08-Sep 26, 2024"
        ]
    },
    {
        title: "7 Night Alaska Cruise",
        image: "assets/image 118.png",
        details: [
            "Aug-28, 2023",
            "Sold Out",
            "Sold Out"
        ]
    },
    {
        title: "Christmas Expedition from London",
        image: "assets/image 119.png",
        details: [
            "A 15 Day Expedition 500 Guests",
            "Departure on Dec-23, 2023. Jan-06 2024",
            "Sold Out"
        ]
    },
    {
        title: "Northern Lights Expedition Cruise",
        image: "assets/image 120.png",
        details: [
            "A 15 Day Expedition 500 Guests",
            "Departure on Sep 30, 2023- Oct 14, 2023",
            "Departure on Dec 09, 2023- Dec 23, 2023"
        ]
    },
    {
        title: "North Cape Express. Bergen To Oslo",
        image: "assets/image 121.png",
        details: [
            "Sep 25, 2023- Oct 09, 2023",
            "Oct 19, 2023- Nov 02, 2023",
            "Nov 12, 2023- Nov 26, 2023"
        ]
    },
    {
        title: "Sail With The Vikings Cruise",
        image: "assets/image 122.png",
        details: [
            "Jul 20, 2024- Aug 01, 2024",
            "Sold Out",
            "Sold Out"
        ]
    },
];

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

const tripCardsContainer = document.querySelector(".row-cols-md-3");

tripsData.forEach(trip => {
    const tripCard = createTripCard(trip);
    tripCardsContainer.innerHTML += tripCard;
});