import { useState } from 'react';
import confetti from 'canvas-confetti';
import askImage from './assets/first.jpeg';
import successImage from './assets/second.jpeg';
import recentImg from './assets/recent.jpeg';
import oldImg from './assets/old.jpeg';
import childhoodImg from './assets/childhood1.jpeg';


const SuccessCarousel = () => {
  // Using the user's uploaded image + placeholders for the 3D effect
  // User, please add more images to src/assets and import them here!
  const galleryImages = [
    successImage,
    recentImg,
    successImage, // Repeated for demo
    oldImg,
    childhoodImg
  ];

  const radius = 200; // Distance from center

  return (
    <div className="perspective-1000 flex justify-center items-center my-10 h-[400px]">
      <div className="carousel-container">
        {galleryImages.map((img, index) => {
          const angle = (360 / galleryImages.length) * index;
          return (
            <div
              key={index}
              className="carousel-item bg-white p-2"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`
              }}
            >
              <img
                src={img}
                alt={`memories-${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  // Romantic background image
  const bgImage = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop";

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYesClick = () => {
    setYesPressed(true);
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 overflow-hidden relative p-4 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${bgImage})` }}>

      {yesPressed ? (
        <>
          <SuccessCarousel />

          <div className='text-xl  font-dancing font-bold text-primary mb-4 text-center px-4 mt-8'>
            உன் விழிகளில் தொலைந்தே போனேன்... மண்ணுக்குள் மறையும்<br></br> முன்னே, உன் மடியில் என்னை அரவணைத்துக் கொள்வாயா?! 💏
          </div>
        </>
      ) : (
        <>
          <div className="mb-8 animate-float">
            <img
              src={askImage}
              alt="bear asking"
              className="w-full max-w-xs h-auto object-cover rounded-lg shadow-2xl mx-auto"
            />
          </div>
          <div className="text-4xl md:text-6xl font-dancing font-bold text-primary mb-8 text-center px-4 leading-tight shadow-white drop-shadow-md">
            Will you be my Valentine?
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center z-10 w-full px-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 shadow-lg transform hover:scale-105"
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-primary hover:bg-rose-700 text-white font-bold py-2 px-4 text-xl rounded shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
