"use client";

import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function ValentinePage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [hearts, setHearts] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);

  const images = [
    "/image1.jpeg?height=400&width=600",
    "/image2.jpeg?height=400&width=600",
    "/image3.jpeg?height=400&width=600",
    "/image4.jpeg?height=400&width=600",
    "/image5.jpeg?height=400&width=600",
    "/image6.jpeg?height=400&width=600",
    "/image7.jpeg?height=400&width=600",
    "/image8.jpeg?height=400&width=600",
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      }));
      setHearts(newHearts);
    };
    generateHearts();
  }, []);

  return (
    <div className="valentine-container">
      {/* Floating Hearts Background */}
      <div className="hearts-background">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            <Heart className="heart-icon" />
          </div>
        ))}
      </div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">Para Meu Amor ❤️</h1>
          <div className="subtitle-section">
            <Heart className="pulse-heart" />
            <span className="subtitle-text">Dia dos Namorados 2025</span>
            <Heart className="pulse-heart" />
          </div>
        </div>

        {/* Photo Carousel */}
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <div className="image-container">
              <img
                src={images[currentImage] || "/image1.jpeg"}
                alt={`Nossa foto ${currentImage + 1}`}
                className="carousel-image"
              />

              {/* Navigation Buttons */}
              <button className="nav-button nav-left" onClick={prevImage}>
                <ChevronLeft className="nav-icon" />
              </button>

              <button className="nav-button nav-right" onClick={nextImage}>
                <ChevronRight className="nav-icon" />
              </button>

              {/* Image Counter */}
              <div className="image-counter">
                {currentImage + 1} / {images.length}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="dots-container">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${
                    index === currentImage ? "dot-active" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Love Letter */}
        <div className="letter-container">
          <div className="letter-wrapper">
            <div className="letter-header">
              <Heart className="letter-heart" />
              <h2 className="letter-title">Carta ao meu Amor</h2>
              <div className="letter-divider"></div>
            </div>

            <div className="letter-content">
              <p className="letter-quote">
                "Meu príncipe, cada foto nossa conta uma história..."
              </p>

              <p className="letter-paragraph">
                Desde o primeiro momento em que nossos olhares se cruzaram, eu
                ja sabia que você era para mim. Cada dia ao seu lado é a certeza
                de um futuro pleno, de uma amor firmado na rocha.
              </p>

              <p className="letter-paragraph">
                Nossas memórias são como estrelas no céu - brilham eternamente e
                me guiam nos momentos mais escuros. Cada risada compartilhada,
                cada abraço apertado, cada "eu te amo, princesa" sussurrado se
                tornou parte de quem eu sou.
              </p>

              <p className="letter-paragraph">
                Com você, descobri que o amor verdadeiro não é apenas um
                sentimento, é um mandamento, é uma escolha… E eu escolho te amar
                como Cristo amou a igreja todos os dias da minha vida, até que
                ele venha!
              </p>

              <p className="letter-signature">
                Te amo hoje, amanhã e para sempre! 💕
              </p>

              <p className="letter-closing">
                Feliz Dia dos Namorados, meu amor!
              </p>
            </div>
          </div>
        </div>

        {/* Footer with floating hearts */}
        <div className="footer-section">
          <div className="footer-hearts">
            <Heart className="bounce-heart" style={{ animationDelay: "0s" }} />
            <Heart
              className="bounce-heart bounce-small"
              style={{ animationDelay: "0.2s" }}
            />
            <Heart
              className="bounce-heart bounce-large"
              style={{ animationDelay: "0.4s" }}
            />
            <Heart
              className="bounce-heart bounce-small"
              style={{ animationDelay: "0.6s" }}
            />
            <Heart
              className="bounce-heart"
              style={{ animationDelay: "0.8s" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .valentine-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #111827, #1f2937);
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
          color: #e5e7eb;
        }

        .hearts-background {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-heart {
          position: absolute;
          animation: float 6s ease-in-out infinite;
          opacity: 0.15;
        }

        .heart-icon {
          width: 16px;
          height: 16px;
          color: #d1d5db;
          fill: #d1d5db;
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 16px;
        }

        .header-section {
          text-align: center;
          margin-bottom: 48px;
          animation: fadeIn 1s ease-out;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: bold;
          background: linear-gradient(45deg, #d1d5db, #f3f4f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .subtitle-section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .pulse-heart {
          width: 24px;
          height: 24px;
          color: #f3f4f6;
          fill: #f3f4f6;
          animation: pulse 2s infinite;
        }

        .subtitle-text {
          font-size: 18px;
          color: #9ca3af;
          font-weight: 500;
        }

        .carousel-container {
          max-width: 800px;
          margin: 0 auto 48px;
        }

        .carousel-wrapper {
          background: #1f2937;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(255, 255, 255, 0.05);
          padding: 24px;
          transition: transform 0.3s ease;
        }

        .carousel-wrapper:hover {
          transform: scale(1.02);
        }

        .image-container {
          position: relative;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .image-container {
            height: 500px;
          }
        }

        .carousel-image {
          width: 60%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
          display: block;
          margin: 0 auto;
          border-radius: 12px;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
          transition: background-color 0.2s;
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .nav-left {
          left: 16px;
        }

        .nav-right {
          right: 16px;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          color: #d1d5db;
        }

        .image-counter {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(31, 41, 55, 0.7);
          color: #f3f4f6;
          padding: 4px 12px;
          border-radius: 8px;
          font-size: 14px;
        }

        .dots-container {
          margin-top: 16px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 10px;
          height: 10px;
          background-color: #4b5563;
          border-radius: 50%;
          transition: background-color 0.3s;
        }

        .dot-active {
          background-color: #f3f4f6;
        }

        .letter-container {
          margin-top: 48px;
          background: #111827;
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.03);
        }

        .letter-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .letter-heart {
          width: 32px;
          height: 32px;
          color: #f3f4f6;
          fill: #f3f4f6;
          margin-bottom: 8px;
        }

        .letter-title {
          font-size: 24px;
          font-weight: 600;
          color: #e5e7eb;
        }

        .letter-divider {
          width: 60px;
          height: 4px;
          background-color: #4b5563;
          margin: 12px auto 0;
          border-radius: 2px;
        }

        .letter-content {
          font-size: 16px;
          color: #d1d5db;
          line-height: 1.8;
          text-align: center;
        }

        .letter-quote {
          font-style: italic;
          color: #f9fafb;
          margin-bottom: 16px;
        }

        .letter-paragraph {
          margin-bottom: 16px;
        }

        .letter-signature {
          font-weight: bold;
          margin-top: 24px;
          color: #f3f4f6;
        }

        .letter-closing {
          margin-top: 8px;
          font-size: 18px;
          color: #e5e7eb;
        }

        .footer-section {
          margin-top: 48px;
          text-align: center;
        }

        .footer-hearts {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }

        .bounce-heart {
          width: 20px;
          height: 20px;
          color: #d1d5db;
          animation: bounce 1.5s infinite;
        }

        .bounce-small {
          animation-duration: 2s;
        }

        .bounce-large {
          animation-duration: 1s;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-10vh);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
