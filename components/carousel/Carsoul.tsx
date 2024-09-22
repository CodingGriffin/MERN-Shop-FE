import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'images/placeholder.svg', // replace with your image paths
    'images/placeholder.svg',
    'images/placeholder.svg'
  ];

  const showSlide = (index: any) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="carousel-container relative w-full max-w-4xl mx-auto mb-12">
      <div className="carousel">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            style={{ opacity: currentSlide === index ? 1 : 0, transition: 'opacity 0.5s ease' }}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>
      <button onClick={() => {prevSlide()}} className="carousel-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
        <i className="fas fa-chevron-left text-pink-600"></i>
			</button>
			<button onClick={() => {nextSlide()}} className="carousel-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
					<i className="fas fa-chevron-right text-pink-600"></i>
			</button>
    </div>
  );
};

export default Carousel;