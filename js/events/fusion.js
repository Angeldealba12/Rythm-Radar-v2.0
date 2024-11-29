const fusion = {
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
}

document.getElementById('event01-section').innerHTML = `
<div class="about-event01-section" >
      <p class="title-event01">${fusion.name}</p>
      <div class="event01-poster">

        <!-- Slideshow container -->
        <div class="slideshow-container">
          <!-- Full-width images with number and caption text -->
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="../img/poster-${fusion.id}.jpg" style="width: 100%" />
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
            <p>${fusion.date}</p>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>${fusion.location}</p>
          </div>
          <div>
            <i class="fa-regular fa-clock"></i>
            <p>Gates open at ${fusion.gatesOpen}</p>
          </div>
        </div>
        <p class="event-description-info-p">
          ${fusion.description}
        </p>
      </div>
      <div class="lineup-highlights">
        <p>Lineup Highlights</p>
        <ul>
          ${fusion.lineupHighlights.map(artist => `<li>${artist}</li>`).join('')}
        </ul>
      </div>
      <div class="what-expect-section">
        <p>What to Expect</p>
        <ul>
          ${fusion.whatToExpect.map(item => `<li>${item}</li>`).join('')}
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
          <p>$${fusion.price}</p>
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