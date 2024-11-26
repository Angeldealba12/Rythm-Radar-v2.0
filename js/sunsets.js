const sunset = {
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
}

document.getElementById('event01-section').innerHTML = `
<div class="about-event01-section" >
      <p class="title-event01">${sunset.name}</p>
      <div class="event01-poster">

        <!-- Slideshow container -->
        <div class="slideshow-container">
          <!-- Full-width images with number and caption text -->
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="./img/poster-${sunset.id}.jpg" style="width: 100%" />
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="./img/Neon Sounds Festival 2024/_5114efa0-9db6-49aa-8319-4e3a662cd6cf.jpg" style="width: 100%" />             
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="./img/Neon Sounds Festival 2024/_3d4f3093-dc43-466e-8976-f67586bff9e2.jpg" style="width: 100%" />          
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
            <p>${sunset.date}</p>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>${sunset.location}</p>
          </div>
          <div>
            <i class="fa-regular fa-clock"></i>
            <p>Gates open at ${sunset.gatesOpen}</p>
          </div>
        </div>
        <p class="event-description-info-p">
          ${sunset.description}
        </p>
      </div>
      <div class="lineup-highlights">
        <p>Lineup Highlights</p>
        <ul>
          ${sunset.lineupHighlights.map(artist => `<li>${artist}</li>`).join('')}
        </ul>
      </div>
      <div class="what-expect-section">
        <p>What to Expect</p>
        <ul>
          ${sunset.whatToExpect.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="expect-images">
          <img src="./img/Neon Sounds Festival 2024/neon-01.jpg" alt="" />
          <img src="./img/Neon Sounds Festival 2024/_3d4f3093-dc43-466e-8976-f67586bff9e2.jpg" alt="" />
          <img src="./img/Neon Sounds Festival 2024/_5114efa0-9db6-49aa-8319-4e3a662cd6cf.jpg" alt="" />
          <img src="./img/Neon Sounds Festival 2024/neon-04.jpg" alt="" />
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
          <p>$${sunset.price}</p>
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