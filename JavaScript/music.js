var edsheeran = [
    {
      "songid" : 1,
      "name" : "Perfect",
      "album" : "Divide",
      "released" : 2017,
      "coverurl" : "../assets/Album-covers/ed-sheeran/perfect.jpg",
      "songurl" : "../assets/music/ed-sheeran/perfect.mp3"
    },
    {
      "songid" : 2,
      "name" : "Galway Girl",
      "album" : "Divide",
      "released" : 2017,
      "coverurl" : "../assets/Album-covers/ed-sheeran/galway-girl.jpeg",
      "songurl" : "../assets/music/ed-sheeran/galway-girl.mp3"
    },
    {
      "songid" : 3,
      "name" : "Photograph",
      "album" : "Multiply",
      "released" : 2015,
      "coverurl" : "../assets/Album-covers/ed-sheeran/photograph.jpg",
      "songurl" : "../assets/music/ed-sheeran/photograph.mp3"
    },
    {
      "songid" : 4,
      "name" : "Shape of You",
      "album" : "Divide",
      "released" : 2017,
      "coverurl" : "../assets/Album-covers/ed-sheeran/shape-of-you.png",
      "songurl" : "../assets/music/ed-sheeran/shape-of-you.mp3"
    }
  ]
var maroon5 = [{
    "songid" : 1,
    "name" : "Memories",
    "album" : "NA",
    "released" : 2019,
    "coverurl" : "../assets/Album-covers/maroon-5/memories.png",
    "songurl" : "../assets/music/maroon-5/memories.mp3"
  },
  {
    "songid" : 2,
    "name" : "Sugar",
    "album" : "V",
    "released" : 2015,
    "coverurl" : "../assets/Album-covers/maroon-5/sugar.jpg",
    "songurl" : "../assets/music/maroon-5/sugar.mp3"
  },
  {
    "songid" : 3,
    "name" : "Animals",
    "album" : "V",
    "released" : 2014,
    "coverurl" : "../assets/Album-covers/maroon-5/animals.png",
    "songurl" : "../assets/music/maroon-5/animals.mp3"
  },
  {
    "songid" : 4,
    "name" : "Payphone",
    "album" : "Overexposed",
    "released" : 2012,
    "coverurl" : "../assets/Album-covers/maroon-5/payphone.png",
    "songurl" : "../assets/music/maroon-5/payphone.mp3"
  }];
var taylor = [{
    "songid" : 1,
    "name" : "Love Story",
    "album" : "Fearless",
    "released" : 2008,
    "coverurl" : "../assets/Album-covers/taylor-swift/Love-story.png"
  },
  {
    "songid" : 2,
    "name" : "Blank Space",
    "album" : "1989",
    "released" : 2014,
    "coverurl" : "../assets/Album-covers/taylor-swift/blank-space.png"
  },
  {
    "songid" : 3,
    "name" : "White Horse",
    "album" : "Fearless",
    "released" : 2008,
    "coverurl" : "../assets/Album-covers/taylor-swift/white-horse.png"
  },
  {
    "songid" : 4,
    "name" : "I Knew You Were Trouble",
    "album" : "Red",
    "released" : 2012,
    "coverurl" : "../assets/Album-covers/taylor-swift/i-knew-you-were-trouble.png"
  }];
var onedirection = [{
    "songid" : 1,
    "name" : "Perfect",
    "album" : "Made in the A.M.",
    "released" : 2015,
    "coverurl" : "../assets/Album-covers/one-direction/perfect.png"
  },
  {
    "songid" : 2,
    "name" : "Little Things",
    "album" : "Take Me Home",
    "released" : 2012,
    "coverurl" : "../assets/Album-covers/one-direction/little-things.png"
  },
  {
    "songid" : 3,
    "name" : "Best Song Ever",
    "album" : "Midnight Memories",
    "released" : 2013,
    "coverurl" : "../assets/Album-covers/one-direction/best-song-ever.png"
  },
  {
    "songid" : 4,
    "name" : "You & I",
    "album" : "Midnight Memories",
    "released" : 2014,
    "coverurl" : "../assets/Album-covers/one-direction/you-and-i.png"
  }];
function init() {}
for(let i=0;i<4;i++){
  const id = "ed-songlist"+(i+1)
  console.log(id)
  document.getElementById(id).innerHTML =
    '<div class="card" style="width: 18rem;display:inline-block;margin-bottom:40px"><img src="'+edsheeran[i].coverurl+'" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">'+edsheeran[i].name +'</p><audio controls><source src="'+edsheeran[i].songurl+'" type="audio/mpeg"></audio></div></div>';
};
for(let i=0;i<4;i++){
    const id = "mar-songlist"+(i+1)
    console.log(id)
    document.getElementById(id).innerHTML =
      '<div class="card" style="width: 18rem;display:inline-block;margin-bottom:40px"><img src="'+maroon5[i].coverurl+'" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">'+maroon5[i].name +'</p><audio controls><source src="'+maroon5[i].songurl+'" type="audio/mpeg"></audio></div></div>';
};
for(let i=0;i<4;i++){
    const id = "tay-songlist"+(i+1)
    console.log(id)
    document.getElementById(id).innerHTML =
      '<div class="card" style="width: 18rem;display:inline-block;margin-bottom:40px"><img src="'+taylor[i].coverurl+'" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">'+taylor[i].name +'</p></div></div>';
};
for(let i=0;i<4;i++){
    const id = "one-songlist"+(i+1)
    console.log(id)
    document.getElementById(id).innerHTML =
      '<div class="card" style="width: 18rem;display:inline-block;margin-bottom:40px"><img src="'+onedirection[i].coverurl+'" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">'+onedirection[i].name +'</p></div></div>';
};