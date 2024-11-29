const harmony = {
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
}

document.getElementById('event01-section').innerHTML = `
<div class="about-event01-section" >
      <p class="title-event01">${harmony.name}</p>
      <div class="event01-poster">

        <!-- Slideshow container -->
        <div class="slideshow-container">
          <!-- Full-width images with number and caption text -->
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="../img/poster-${harmony.id}.jpg" style="width: 100%" />
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
            <p>${harmony.date}</p>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>${harmony.location}</p>
          </div>
          <div>
            <i class="fa-regular fa-clock"></i>
            <p>Gates open at ${harmony.gatesOpen}</p>
          </div>
        </div>
        <p class="event-description-info-p">
          ${harmony.description}
        </p>
      </div>
      <div class="lineup-highlights">
        <p>Lineup Highlights</p>
        <ul>
          ${harmony.lineupHighlights.map(artist => `<li>${artist}</li>`).join('')}
        </ul>
      </div>
      <div class="what-expect-section">
        <p>What to Expect</p>
        <ul>
          ${harmony.whatToExpect.map(item => `<li>${item}</li>`).join('')}
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
          <p>$${harmony.price}</p>
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