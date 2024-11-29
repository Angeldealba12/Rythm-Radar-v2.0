

const eventsList = [
    {
        id: 1,
        name: "Harmony Haven Festival",
        shortName: "harmony",
        location: "Austin, Texas",
        date: "2025-05-15",
        price: 120.0,
        description:
            "A vibrant weekend of live music, art, and local food in the heart of Texas.",
        gatesOpen: "10:00 AM",
        lineupHighlights: [
            "The Echoes",
            "Neon Dreams",
            "Aurora Waves",
            "DJ Luminous",
            "Skyline Serenade",
        ],
        whatToExpect: [
            "Art Installations: Interactive and glow-themed art exhibits that come alive with the rhythm and energy of the festival.",
            "Local Food Stalls: Explore unique and delicious eats from Texas food vendors.",
            "Camping: Exclusive overnight stays with morning yoga sessions.",
            "Merch Stalls: Limited edition memorabilia and local craft items.",
            "Firework Finale: A spectacular fireworks show to close out the festival.",
        ],
    },
    {
        id: 2,
        name: "Sunset Beats",
        shortName: "sunset",
        location: "Miami, Florida",
        date: "2025-07-10",
        price: 80.0,
        description:
            "An electrifying beachfront music festival featuring tropical vibes and top DJs.",
        gatesOpen: "4:00 PM",
        lineupHighlights: [
            "DJ Solar",
            "Beachwave",
            "Tropic Tunes",
            "Nightfall Beats",
            "Island Rhythm",
        ],
        whatToExpect: [
            "Beach Party: Sunset dancing on the sands of Miami Beach.",
            "Photo Booths: Capture memories with themed backdrops.",
            "Cocktail Bars: Signature festival drinks served all night.",
            "Laser Shows: Stunning light displays synchronized with the music.",
            "VIP Lounges: Exclusive seating and services for premium ticket holders.",
        ],
    },
    {
        id: 3,
        name: "Mountain Echoes Fest",
        shortName: "mountain",
        location: "Denver, Colorado",
        date: "2025-08-22",
        price: 150.0,
        description:
            "An immersive alpine music experience celebrating nature and sound.",
        gatesOpen: "12:00 PM",
        lineupHighlights: [
            "Forest Vibes",
            "Peak Harmonies",
            "Soundscape Collective",
            "The Summit Lights",
            "DJ Frost",
        ],
        whatToExpect: [
            "Nature Trails: Explore scenic hiking routes during the day.",
            "Acoustic Sets: Intimate performances on smaller stages.",
            "Eco Workshops: Learn about sustainability and conservation.",
            "Bonfire Nights: Gather around for storytelling and live music.",
            "Craft Beer: Colorado's finest breweries on tap.",
        ],
    },
    {
        id: 4,
        name: "Neon Nights",
        shortName: "neon",
        location: "Las Vegas, Nevada",
        date: "2025-06-01",
        price: 200.0,
        description:
            "A dazzling music event featuring electronic beats and vibrant visuals.",
        gatesOpen: "6:00 PM",
        lineupHighlights: [
            "Glowmaster",
            "Lightwave DJs",
            "Pulse Electric",
            "Neon Sound Machine",
            "DJ Infinity",
        ],
        whatToExpect: [
            "Laser Light Shows: Mesmerizing visuals paired with music.",
            "Glow-in-the-Dark Accessories: Free glow items for attendees.",
            "Dance Competitions: Join or cheer for the best dancers.",
            "Food Trucks: Gourmet meals available late into the night.",
            "Silent Disco: Dance with your own groove on wireless headphones.",
        ],
    },
    {
        id: 5,
        name: "Blues & Brews",
        shortName: "blues",
        location: "Memphis, Tennessee",
        date: "2025-09-15",
        price: 75.0,
        description:
            "A soulful celebration of blues music paired with local craft beer.",
        gatesOpen: "2:00 PM",
        lineupHighlights: [
            "Delta Rhythm Kings",
            "Memphis Blues Band",
            "Soul Strings",
            "The Guitar Legends",
            "Harmonica Blues",
        ],
        whatToExpect: [
            "Live Blues Sets: Non-stop blues music from top artists.",
            "Beer Tastings: Sample local and regional brews.",
            "Blues History Talks: Learn about the origins and legacy of blues.",
            "BBQ Feast: Enjoy Memphis-style barbecue with your brews.",
            "Artisan Vendors: Handcrafted items inspired by blues culture.",
        ],
    },
    {
        id: 6,
        name: "Rhythm & Roots Festival",
        shortName: "rhythm",
        location: "Nashville, Tennessee",
        date: "2025-10-10",
        price: 90.0,
        description:
            "A homage to country music roots blended with contemporary sounds.",
        gatesOpen: "11:00 AM",
        lineupHighlights: [
            "Southern Strings",
            "Heartland Harmony",
            "Golden Banjos",
            "Fiddle Frenzy",
            "The Lyrical Lights",
        ],
        whatToExpect: [
            "Line Dancing: Join group dances with professional instructors.",
            "Food Trucks: Southern comfort food to fuel your day.",
            "Vintage Market: Browse unique finds and music memorabilia.",
            "Meet & Greets: Opportunities to meet select artists.",
            "Kids' Zone: Family-friendly activities and games.",
        ],
    },
    {
        id: 7,
        name: "Global Grooves",
        shortName: "global",
        location: "Los Angeles, California",
        date: "2025-11-20",
        price: 130.0,
        description:
            "An international music festival celebrating diverse genres and cultures.",
        gatesOpen: "1:00 PM",
        lineupHighlights: [
            "Afrobeat Allstars",
            "Latin Rhythms",
            "Asian Beats Collective",
            "Middle Eastern Melodies",
            "Euro Sound",
        ],
        whatToExpect: [
            "Cultural Performances: Traditional dances and live acts.",
            "World Cuisine: Food trucks serving dishes from around the globe.",
            "Art Exhibits: Culturally inspired artworks on display.",
            "Workshops: Learn musical instruments from different cultures.",
            "Global Market: Handcrafted goods from international artisans.",
        ],
    },
    {
        id: 8,
        name: "Fusion Fest",
        shortName: "fusion",
        location: "San Francisco, California",
        date: "2025-04-05",
        price: 95.0,
        description:
            "A genre-defying festival combining jazz, funk, and electronic music.",
        gatesOpen: "3:00 PM",
        lineupHighlights: [
            "Jazz Pulse",
            "Funky Frequencies",
            "Electro Groove",
            "Fusion Collective",
            "DJ Sync",
        ],
        whatToExpect: [
            "Jam Sessions: Collaborative performances with artists.",
            "Food Fusion: Unique meals blending cuisines.",
            "Art Jam: Live painting and graffiti art.",
            "Silent Disco: Late-night groove sessions.",
            "Interactive Workshops: Music production and mixing tips.",
        ],
    },
    {
        id: 9,
        name: "Desert Soundscape",
        shortName: "desert",
        location: "Phoenix, Arizona",
        date: "2025-03-28",
        price: 140.0,
        description: "A magical desert-themed music festival under the stars.",
        gatesOpen: "5:00 PM",
        lineupHighlights: [
            "The Sandstorm Sounds",
            "Desert DJ Duo",
            "Mirage Beats",
            "Cactus Harmony",
            "Starry Nights Band",
        ],
        whatToExpect: [
            "Stargazing Lounge: Telescopes and guided sky tours.",
            "Bonfire Performances: Acoustic sets around the fire.",
            "Desert Art: Installations inspired by the Southwest.",
            "Yoga Sessions: Morning yoga in the desert.",
            "Food and Drink: Local flavors and refreshing cocktails.",
        ],
    },
    {
        id: 10,
        name: "City Vibes Weekend",
        shortName: "city",
        location: "New York, New York",
        date: "2025-08-10",
        price: 100.0,
        description:
            "A dynamic urban festival showcasing city soundscapes and street culture.",
        gatesOpen: "10:00 AM",
        lineupHighlights: [
            "Urban Symphony",
            "City Beats Crew",
            "Downtown Funk",
            "Skyline Rhythms",
            "Metropolitan DJ",
        ],
        whatToExpect: [
            "Street Performances: Live music and dance acts in unique city spots.",
            "Food Markets: Iconic NYC street food.",
            "Urban Art Tours: Graffiti and mural exhibitions.",
            "Cocktail Stations: Mixology pop-ups around the venue.",
            "Photo Walks: Guided tours capturing the city's spirit.",
        ],
    },
];

for (let i = 0; i < eventsList.length; i++) {
    let allEvents = eventsList[i];

    document.getElementById("all-events-container").innerHTML += `
        <div class="card-all-event">
                    <img src="../img/poster-${allEvents.id}.jpg" alt="${allEvents.name}" />
                    <a href="../event-pages/${allEvents.shortName}.html" class="card-all-event-title">${allEvents.name}</a>
                    <div class="card-all-event-location">
                      <p>${allEvents.date}</p>
                      <p>${allEvents.location}</p>
                    </div>
                    <div class="events-card-tickets">
                      <p>$${allEvents.price}</p>
                      <a href="../event-pages/${allEvents.shortName}.html" class="button">Tickets</a>
                    </div>
                  </div>
                </div>
    
    `
}
