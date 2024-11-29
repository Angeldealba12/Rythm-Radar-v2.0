const mountain = {
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
}

document.getElementById('event01-section').innerHTML = `
<div class="about-event01-section" >
      <p class="title-event01">${mountain.name}</p>
      <div class="event01-poster">

        <!-- Slideshow container -->
        <div class="slideshow-container">
          <!-- Full-width images with number and caption text -->
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="../img/poster-${mountain.id}.jpg" style="width: 100%" />
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="../img/Neon Sounds Festival 2024/_5114efa0-9db6-49aa-8319-4e3a662cd6cf.jpg" style="width: 100%" />             
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="../img/Neon Sounds Festival 2024/_3d4f3093-dc43-466e-8976-f67586bff9e2.jpg" style="width: 100%" />          
          </div>

          <!-- Next and previous buttons -->
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br />
        <!-- The dots/circles -->
        <div style="text-align: center">
          <span class="dot" onclick="currentSlide(1)"></span>
          <span class="dot" onclick="currentSlide(2)"></span>
          <span class="dot" onclick="currentSlide(3)"></span>
        </div>
      </div>
      <div class="event-description">
        <div class="event-description-info">
          <div>
            <i class="fa-regular fa-calendar"></i>
            <p>${mountain.date}</p>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>${mountain.location}</p>
          </div>
          <div>
            <i class="fa-regular fa-clock"></i>
            <p>Gates open at ${mountain.gatesOpen}</p>
          </div>
        </div>
        <p class="event-description-info-p">
          ${mountain.description}
        </p>
      </div>
      <div class="lineup-highlights">
        <p>Lineup Highlights</p>
        <ul>
          ${mountain.lineupHighlights.map(artist => `<li>${artist}</li>`).join('')}
        </ul>
      </div>
      <div class="what-expect-section">
        <p>What to Expect</p>
        <ul>
          ${mountain.whatToExpect.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="expect-images">
          <img src="../img/Neon Sounds Festival 2024/neon-01.jpg" alt="" />
          <img src="../img/Neon Sounds Festival 2024/_3d4f3093-dc43-466e-8976-f67586bff9e2.jpg" alt="" />
          <img src="../img/Neon Sounds Festival 2024/_5114efa0-9db6-49aa-8319-4e3a662cd6cf.jpg" alt="" />
          <img src="../img/Neon Sounds Festival 2024/neon-04.jpg" alt="" />
        </div>
      </div>
    </div>
     <!-- Get Your Tickets section -->
    <aside class="aside-buy-ticket">
      <form>
        <p>Get Your Tickets</p>
        <label for="ticket Type">Ticket Type</label>
        <input type="text" />
        <label for="Quantity">Quantity</label>
        <input type="number" />
        <div class="total-price">
          <p>Total:</p>
          <p>$${mountain.price}</p>
        </div>
        <button type="submit">Buy Tickets</button>
      </form>
      <div class="share-event">
        <p>Share Event</p>
        <div class="share-icons">
          <i class="fa-regular fa-envelope"></i>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </aside>
`