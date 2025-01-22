import React, { useState } from 'react';
import { Globe2, ChevronRight, ChevronLeft } from 'lucide-react';

interface Wonder {
  name: string;
  location: string;
  description: string;
  image: string;
  yearBuilt: string;
}

const wonders: Wonder[] = [
  {
    name: "Great Wall of China",
    location: "China",
    description: "Built over many centuries, the Great Wall of China is a series of walls and fortifications stretching over 13,000 miles. While not visible from space (contrary to popular belief), it remains one of humanity's most impressive architectural achievements.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&h=800",
    yearBuilt: "220 BCE - 1644 CE"
  },
  {
    name: "Petra",
    location: "Jordan",
    description: "The ancient city of Petra, carved into rose-colored rock faces, was the capital of the Nabataean Empire. The most famous structure, the Treasury (Al-Khazneh), stands as a testament to ancient architectural ingenuity.",
    image: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=1200&h=800",
    yearBuilt: "312 BCE"
  },
  {
    name: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    description: "Standing atop Corcovado Mountain, this Art Deco statue of Jesus Christ is 98 feet tall and has become a symbol of both Rio de Janeiro and Brazil as a whole.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&h=800",
    yearBuilt: "1931"
  },
  {
    name: "Machu Picchu",
    location: "Peru",
    description: "This 15th-century Inca citadel, set high in the Andes Mountains, was built with polished dry-stone walls and is renowned for its sophisticated architecture and astronomical alignments.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&h=800",
    yearBuilt: "1450"
  },
  {
    name: "Chichen Itza",
    location: "Yucatan, Mexico",
    description: "This pre-Columbian city built by the Maya civilization features the iconic step-pyramid El Castillo and demonstrates the civilization's expertise in architecture, engineering, and astronomy.",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&h=800",
    yearBuilt: "600 CE"
  },
  {
    name: "Colosseum",
    location: "Rome, Italy",
    description: "The largest amphitheater ever built, this oval amphitheater in the heart of Rome could hold up to 80,000 spectators and was used for gladiatorial contests and public spectacles.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&h=800",
    yearBuilt: "80 CE"
  },
  {
    name: "Taj Mahal",
    location: "Agra, India",
    description: "This ivory-white marble mausoleum was commissioned by Mughal Emperor Shah Jahan in memory of his beloved wife. It's considered the finest example of Mughal architecture and a symbol of eternal love.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&h=800",
    yearBuilt: "1653"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % wonders.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + wonders.length) % wonders.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="py-6 px-4 bg-black/30">
        <div className="container mx-auto flex items-center justify-center">
          <Globe2 className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold">Seven Wonders of the World</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="relative max-w-6xl mx-auto">
          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src={wonders[currentIndex].image}
                  alt={wonders[currentIndex].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">{wonders[currentIndex].name}</h2>
                <div className="space-y-2">
                  <p className="text-xl text-gray-300">
                    <span className="font-semibold">Location:</span> {wonders[currentIndex].location}
                  </p>
                  <p className="text-xl text-gray-300">
                    <span className="font-semibold">Built:</span> {wonders[currentIndex].yearBuilt}
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {wonders[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              {wonders.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;