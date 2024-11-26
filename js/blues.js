const blues = {
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
}

document.getElementById('event01-section').innerHTML = `
<div class="about-event01-section" >
      <p class="title-event01">${blues.name}</p>
      <div class="event01-poster">

        <!-- Slideshow container -->
        <div class="slideshow-container">
          <!-- Full-width images with number and caption text -->
          <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img src="./img/poster-${blues.id}.jpg" style="width: 100%" />
          </div>

          <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="./img/Blues & Brews Festival 2025/blues-02.jpg" style="width: 100%" />             
          </div>

          <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="./img/Blues & Brews Festival 2025/blues-03.jpg" style="width: 100%" />          
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
            <p>${blues.date}</p>
          </div>
          <div>
            <i class="fa-solid fa-location-dot"></i>
            <p>${blues.location}</p>
          </div>
          <div>
            <i class="fa-regular fa-clock"></i>
            <p>Gates open at ${blues.gatesOpen}</p>
          </div>
        </div>
        <p class="event-description-info-p">
          ${blues.description}
        </p>
      </div>
      <div class="lineup-highlights">
        <p>Lineup Highlights</p>
        <ul>
          ${blues.lineupHighlights.map(artist => `<li>${artist}</li>`).join('')}
        </ul>
      </div>
      <div class="what-expect-section">
        <p>What to Expect</p>
        <ul>
          ${blues.whatToExpect.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div class="expect-images">
          <img src="./img/Blues & Brews Festival 2025/blues-01.jpg" alt="" />
          <img src="./img/Blues & Brews Festival 2025/blues-02.jpg" alt="" />
          <img src="./img/Blues & Brews Festival 2025/blues-03.jpg" alt="" />
          <img src="./img/Blues & Brews Festival 2025/blues-04.jpg" alt="" />
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
          <p>$${blues.price}</p>
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