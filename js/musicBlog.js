const blogPosts = [
    {
        Name: "Emily Rodriguez",
        PostedTime: "Posted 3 hours ago",
        Comment: "I just had an amazing experience at Neon Light Festival! The energy was incredible, and the lineup was mind-blowing. The electronic dance music was so vibrant, and the light shows were absolutely spectacular. Me and my boyfriend just loved every single moment of it! If you're a music lover, this is a must-attend event. 🎶🌈 #SummerVibes #MusicFestival #NeonLightExperience"
    },
    {
        Name: "Jake Thompson",
        PostedTime: "Posted 6 hours ago",
        Comment: "Wow, what a night at the Summer Beats Concert! The rock bands were on fire, and the crowd's enthusiasm was off the charts. I've been to many concerts, but this one was truly special. The acoustics were perfect, and the energy was just unreal. Definitely recommend everyone to check out this festival! 🎸🤘 #ConcertNight #RockMusic #SummerFestival"
    },
    {
        Name: "Sophia Chen",
        PostedTime: "Posted 1 day ago",
        Comment: "Just got back from the Rhythm & Waves Music Festival, and I'm still buzzing with excitement! The mix of genres was fantastic - from indie rock to electronic dance music. The sunset performance was magical, and the crowd was so warm and friendly. This is definitely going to be an annual tradition for me! 🌅🎉 #MusicLove #FestivalSeason #UnforgettableNight"
    },
    {
        Name: "Carlos Martinez",
        PostedTime: "Posted 2 days ago",
        Comment: "The Urban Sounds Festival was an absolute blast! Hip-hop and R&B artists killed it on stage. The atmosphere was electric, and every performance was top-notch. Met some amazing people and discovered new music. If you're into urban music, you cannot miss this festival next year! 🎤🔥 #UrbanMusic #MusicFest #HipHopConcert"
    },
    {
        Name: "Olivia Bennett",
        PostedTime: "Posted 4 days ago",
        Comment: "Indie Nights Music Festival exceeded all my expectations! The emerging artists were incredibly talented, and the intimate venue created such a unique experience. Every band brought something special to the stage. It's events like these that make me fall in love with live music all over again. 🎸🌟 #IndieMusic #MusicDiscovery #LiveConcert"
    }
];


for (let i = 0; i < blogPosts.length; i++){
    let posts = blogPosts[i]

    document.getElementById('users-posts').innerHTML += `
    
     <div class="comment-card">
            <div class="comment-card-user-info">
              <img src="../img/user01.jpg" alt="user-icon" />
              <div>
                <h3>${posts.Name}</h3>
                <p>${posts.PostedTime}</p>
              </div>
            </div>
            <p class="comment-description">
              ${posts.Comment}
            </p>
            <div class="user-picture-updaload">
              <img src="../img/user01-01.jpg" alt="user-picture-updaload" />
              <img src="../img/user01-02.jpg" alt="user-picture-updaload" />
            </div>
            <div class="like-comment-share">
              <div>
                <i class="fa-regular fa-heart"></i>
                <p>Like</p>
              </div>
              <div>
                <i class="fa-regular fa-comment"></i>
                <p>Comment</p>
              </div>
              <div>
                <i class="fa-regular fa-share-from-square"></i>
                <p>Share</p>
              </div>
            </div>
          </div>
    
    `
}