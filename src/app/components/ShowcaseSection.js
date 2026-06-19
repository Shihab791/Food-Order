"use client";
import React, { useState } from "react";

export default function ShowcaseSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      alt: "Burger",
    },
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
      alt: "Pizza",
    },
    {
      src: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
      alt: "Donut",
    },
    {
      src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
      alt: "Chicken",
    },
  ];

  return (
    <section className="w-full bg-[#FCF8F3] py-16 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h4 className="text-[#E32207] italic text-xl">Food Showcase</h4>
          <h2 className="text-3xl md:text-5xl font-black text-[#1E1E1E] tracking-tight">
            Let's See Our <span className="text-[#E32207]">Fast Food</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* LEFT BIG */}
          <div
            onClick={() => setSelectedImage(images[0])}
            className="cursor-pointer relative overflow-hidden rounded-2xl h-[300px] md:h-[500px]"
          >
            <img
              src={images[0].src}
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>

          {/* MIDDLE */}
          <div className="flex flex-col gap-5">

            <div
              onClick={() => setSelectedImage(images[1])}
              className="cursor-pointer h-[240px] overflow-hidden rounded-2xl"
            >
              <img
                src={images[1].src}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            <div
              onClick={() => setSelectedImage(images[2])}
              className="cursor-pointer h-[240px] overflow-hidden rounded-2xl"
            >
              <img
                src={images[2].src}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">

            <div
              onClick={() => setSelectedImage(images[3])}
              className="cursor-pointer h-[240px] overflow-hidden rounded-2xl"
            >
              <img
                src={images[3].src}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            <div
              onClick={() => setSelectedImage(images[0])}
              className="cursor-pointer h-[240px] overflow-hidden rounded-2xl"
            >
              <img
                src={images[0].src}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

          </div>

        </div>

        {/* ================= MODAL (LIGHTBOX) ================= */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 bg-white text-black w-10 h-10 rounded-full"
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage.src}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
              alt={selectedImage.alt}
            />
          </div>
        )}

      </div>
    </section>
  );
}