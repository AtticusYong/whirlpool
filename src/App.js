import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Unity",
      artist: "TheFatRat",
      img_src: "./images/song-1.jpg",
      src: "./music/unity.mp3"
    },
    {
      title: "Monody",
      artist: "TheFatRat",
      img_src: "./images/song-2.jpg",
      src: "./music/monody.mp3"
    },
    {
      title: "MAYDAY",
      artist: "TheFatRat",
      img_src: "./images/song-3.jpg",
      src: "./music/mayday.mp3"
    },
    {
      title: "Rise Up",
      artist: "TheFatRat",
      img_src: "./images/song-4.jpg",
      src: "./music/riseup.mp3"
    },
    {
      title: "We'll Meet Again",
      artist: "TheFatRat",
      img_src: "./images/song-5.jpg",
      src: "./music/wellmeetagain.mp3"
    },
    {
      title: "Fly Away",
      artist: "TheFatRat",
      img_src: "./images/song-6.jpg",
      src: "./music/flyaway.mp3"
    },
    {
      title: "No No No",
      artist: "TheFatRat",
      img_src: "./images/song-7.jpg",
      src: "./music/nonono.mp3"
    },
    {
      title: "U.S. Presidents Song",
      artist: "Kids Learning Tube",
      img_src: "./images/song-8.jpg",
      src: "./music/presidents_song.mp3"
    },
    {
      title: "The Nights",
      artist: "Avicii",
      img_src: "./images/song-9.jpg",
      src: "./music/avicii_the_nights.mp3"
    },
    {
      title: "All I Do is Win",
      artist: "DJ Khaled",
      img_src: "./images/song-10.jpg",
      src: "./music/all-i-do-is-win-win-win-no-matter-what.mp3"
    },
    {
      title: "Symbolism",
      artist: "NCS",
      img_src: "./images/song-11.jpg",
      src: "./music/symbolism.mp3"
    },
    {
      title: "Don't Stop Dreaming",
      artist: "Olympics",
      img_src: "./images/song-12.jpg",
      src: "./music/dont-stop-dreaming.mp3"
    }
  ]);


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;