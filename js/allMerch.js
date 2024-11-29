const merchandiseItems = [
    {
        name: "Classic Logo Hoodie",
        price: 80,
        id: 5
    },
    {
        name: "Rhythm Radar Tour T-Shirt",
        price: 45,
        id: 6
    },
    {
        name: "Festival Season Snapback Cap",
        price: 35,
        id: 7
    },
    {
        name: "Live Music Crew Sweatshirt",
        price: 65,
        id: 8
    },
    {
        name: "Concert Collector's Tote Bag",
        price: 25,
        id: 9
    },
    {
        name: "Rhythm Radar Vintage Tote Bag",
        price: 50,
        id: 11
    },
    {
        name: "Sound Waves Long Sleeve Shirt",
        price: 40,
        id: 12
    },
    {
        name: "Concert Legends Poster",
        price: 90,
        id: 13
    },
    {
        name: "Music Notes cap",
        price: 30,
        id: 14
    },
    {
        name: "Live Performance Tank Top",
        price: 35,
        id: 15
    },
    {
        name: "Rhythm Radar Limited Edition cap",
        price: 120,
        id: 16
    },
    {
        name: "Bass Line Graphic Hoodie",
        price: 85,
        id: 18
    },
    {
        name: "Rhythm Radar World Tour Poster",
        price: 15,
        id: 19
    }
];

for(let i = 0; i < merchandiseItems.length; i++){
    let merch_items = merchandiseItems[i]
    document.getElementById('merch-cards').innerHTML += `
     <div class="merch-card">
        <img src="../img/Merch/merch-${merch_items.id}.jpg" alt="Concert Tee" />
        <p>${merch_items.name}</p>
        <div class="price-box">
          <p>$${merch_items.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `
}