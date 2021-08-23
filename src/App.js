import "./styles.css";
import react, { useState } from "react";

const musicDB = {
  Bollywood: [
    {
      name: "Tu Jaane Na",
      artist: "Atif Aslam",
      releaseYear: "2009",
      rating: " ⭐⭐⭐⭐"
    },
    {
      name: "Beetein Lamhen",
      artist: "KK",
      releaseYear: "2007",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Aao Na",
      artist: "Vishal Dadlani",
      releaseYear: "2014",
      rating: "⭐⭐⭐⭐"
    }
  ],
  Rock: [
    {
      name: "Lips of an Angel",
      artist: "Hinder",
      releaseYear: "2005",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Summer of 69",
      artist: "Bryan Adams",
      releaseYear: "1984",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Pour some sugar on me",
      artist: "Def Leppard",
      releaseYear: "1987",
      rating: "⭐⭐⭐"
    }
  ],
  Metal: [
    {
      name: "Enter the Sandman",
      artist: "Metallica",
      releaseYear: "1991",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Engel",
      artist: "Rammstein",
      releaseYear: "1997",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Last Resort",
      artist: "Papa Roach",
      releaseYear: "2000",
      rating: "⭐⭐⭐⭐"
    }
  ],
  EDM: [
    {
      name: "I could be the one",
      artist: "Avicii",
      releaseYear: "2015",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Calling",
      artist: "Swedish House Mafia",
      releaseYear: "2012",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Pressure",
      artist: "Alesso",
      releaseYear: "2010",
      rating: "⭐⭐⭐⭐⭐"
    }
  ]
};
var musicList = Object.keys(musicDB);
export default function App() {
  const [selectedGenre, setGenre] = useState("EDM");
  function musicClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Music Guide for Dummies!</h1>
      <div>
        {musicList.map((genre) => (
          <button
            style={{
              cursor: "pointer",
              margin: "1rem",
              borderRadius: "0.3rem",
              backgroundColor: "mistyrose",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              border: "1px solid black"
            }}
            onClick={() => musicClickHandler(genre)}
            key={genre}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="container">
        <ul className="list-container">
          {musicDB[selectedGenre].map((list) => (
            <li
              style={{
                border: "1px solid #D1D5DB",
                padding: "0.5rem",
                margin: "1rem 0.5rem",
                marginBottom: "2rem",
                marginLeft: "4rem",
                width: "70%",
                borderBottomLeftRadius: "0.5rem",
                backgroundColor: "pink",
                border: "1px solid black"
              }}
            >
              <div>{list.name}</div>
              <div>{list.artist} </div>
              <div>{list.releaseYear}</div>
              <div>{list.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
