const data = [
  {
    name: "Actors",
    actors: [
      {
        name: "Violet Davis",
        description: "Viola Davis is an American actress and film producer. Her accolades include both the Triple Crown of Acting and EGOT. Time named her one of the 100 most influential people in the world in 2012 and 2017. The New York Times ranked her ninth on its list of the greatest actors of the 21st century.",
        movies: ["Fences", "Kungfu Panda","Air","Black Adam","The Unforgivable"],
        movieImg: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1gW3t7Jho_XyOVYuVP23wniH1JoblRbMFY7B8vOzydwkF97X6EqdWUaGOxVlv35ceoFjhHNQpb3NVUcu_NCWs6Byo9j0pyLTOU4jX1fijJzY66TWSMx14h8SE-4EvM2EcGSPmXiSErGSz/s1600/Fences.jpg", "https://www.dreamworks.com/storage/cms-uploads/kung-fu-panda-4-he-poster.jpg","https://m.media-amazon.com/images/M/MV5BZGUzNjFmMWEtNWJkNy00MzEwLWFhNjgtMWMyYjY0MWY3ZjVlXkEyXkFqcGc@._V1_.jpg","https://m.media-amazon.com/images/M/MV5BYmM3OTM4NDktMmI2NS00OWU0LTg4OTQtNjZhMmFkYjhmOGY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg","https://image.tmdb.org/t/p/original/1b3dNFDuE7i05TJlXrIC571yR01.jpg"],
        path: "/actor/0",
        image: "https://assets.vogue.com/photos/5891ea21b4a4bd466012a69e/master/w_1329,h_2000,c_limit/viola-davis-emmys-2015-speech.jpg"
      },
      {
        name: "Denzel Washington",
        description: "Acclaimed actor and two-time Academy Award winner",
        movies: ["Training Day", "Malcolm X"],
        movieImg: ["imgURL3", "imgURL4"],
        path: "/actor/1",
        image: "denzelImageURL"
      },
      {
        name: "Morgan Freeman",
        description: "Oscar-winning actor known for his distinctive voice",
        movies: ["The Shawshank Redemption", "Driving Miss Daisy"],
        movieImg: ["imgURL5", "imgURL6"],
        path: "/actor/2",
        image: "freemanImageURL"
      },
      {
        name: "Halle Berry",
        description: "First African American woman to win the Oscar for Best Actress",
        movies: ["Monster's Ball", "Catwoman"],
        movieImg: ["imgURL7", "imgURL8"],
        path: "/actor/3",
        image: "berryImageURL"
      },
      {
        name: "Chadwick Boseman",
        description: "Known for iconic roles including Black Panther",
        movies: ["Black Panther", "42"],
        movieImg: ["imgURL9", "imgURL10"],
        path: "/actor/4",
        image: "bosemanImageURL"
      },
      {
        name: "Lupita Nyong'o",
        description: "Academy Award-winning actress known for her powerful performances",
        movies: ["12 Years a Slave", "Us"],
        movieImg: ["imgURL11", "imgURL12"],
        path: "/actor/5",
        image: "nyongoImageURL"
      }
    ]
  },
  {
    name: "Athletes",
    athletes: [
      {
        name: "Serena Williams",
        description: "One of the greatest tennis players of all time",
        achievements: ["23 Grand Slam titles", "4 Olympic gold medals"],
        path: "/athlete/0",
        image: "serenaImageURL"
      },
      {
        name: "Michael Jordan",
        description: "Legendary basketball player",
        achievements: ["6 NBA Championships", "5 MVP Awards"],
        path: "/athlete/1",
        image: "jordanImageURL"
      },
      {
        name: "Usain Bolt",
        description: "Fastest man in the world",
        achievements: ["8 Olympic gold medals", "11 World Championships gold medals"],
        path: "/athlete/2",
        image: "boltImageURL"
      },
      {
        name: "Simone Biles",
        description: "Most decorated gymnast in World Championship history",
        achievements: ["7 Olympic medals", "25 World Championship medals"],
        path: "/athlete/3",
        image: "bilesImageURL"
      },
      {
        name: "LeBron James",
        description: "One of the greatest basketball players of all time",
        achievements: ["4 NBA Championships", "4 MVP Awards"],
        path: "/athlete/4",
        image: "lebronImageURL"
      },
      {
        name: "Allyson Felix",
        description: "Most decorated American track and field athlete",
        achievements: ["11 Olympic medals", "13 World Championship medals"],
        path: "/athlete/5",
        image: "felixImageURL"
      }
    ]
  },
  {
    name: "Singers",
    singers: [
      {
        name: "Beyoncé",
        description: "One of the best-selling music artists of all time",
        albums: ["Lemonade", "Dangerously in Love"],
        path: "/singer/0",
        image: "beyonceImageURL"
      },
      {
        name: "Whitney Houston",
        description: "One of the best-selling music artists of all time",
        albums: ["The Bodyguard", "Whitney"],
        path: "/singer/1",
        image: "houstonImageURL"
      },
      {
        name: "Michael Jackson",
        description: "King of Pop",
        albums: ["Thriller", "Bad"],
        path: "/singer/2",
        image: "jacksonImageURL"
      },
      {
        name: "Aretha Franklin",
        description: "Queen of Soul",
        albums: ["Respect", "Amazing Grace"],
        path: "/singer/3",
        image: "franklinImageURL"
      },
      {
        name: "Stevie Wonder",
        description: "One of the most creative musical figures of the late 20th century",
        albums: ["Songs in the Key of Life", "Talking Book"],
        path: "/singer/4",
        image: "wonderImageURL"
      },
      {
        name: "Nina Simone",
        description: "Singer, songwriter, and civil rights activist",
        albums: ["I Put a Spell on You", "Nina Simone Sings the Blues"],
        path: "/singer/5",
        image: "simoneImageURL"
      }
    ]
  }
];




const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})


app.listen(3000, ()=>{
  console.log("Server started...")
})