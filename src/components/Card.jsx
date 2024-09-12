import React from 'react';

const data = [
  {
    image: "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmElMjBkaXZpbmd8ZW58MHx8MHx8fDA%3D",
    title: "Scuba Diving in the Barrier Reef",
    location: "Cairns, Australia",
    details: "Discover the vibrant underwater world of the Great Barrier Reef and encounter a variety of marine life.",
    ratings: "4.7",
    price: "$199",
  },
  {
    image: "https://images.unsplash.com/photo-1645564386021-0db0dd3e2ad7?w=800&auto=format&fit=crop&q=60",
    title: "Kayaking in the Fjords",
    location: "Bergen, Norway",
    details: "Explore the serene and majestic fjords of Norway by kayak, surrounded by towering cliffs and lush landscapes.",
    ratings: "4.8",
    price: "$159",
  },
  {
    image: "https://images.unsplash.com/photo-1659436416025-6f2f189788e0?w=800&auto=format&fit=crop&q=60",
    title: "Surfing Lessons in Bali",
    location: "Canggu, Bali",
    details: "Learn to surf the iconic waves of Bali's Canggu beach with experienced instructors and enjoy the tropical waters.",
    ratings: "4.7",
    price: "$89",
  },
];

const Card = () => {
  return (
    <div className="h-screen w-full bg-zinc-300 flex items-center justify-center p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((elem, index) => (
          <div key={index} className="w-80 h-90 bg-zinc-200 rounded-md overflow-hidden shadow-md">
            <div className="w-full h-36">
              <img
                className="h-full w-full object-cover object-center"
                src={elem.image}
                alt={elem.title}
              />
            </div>
            <div className="p-3">
              <div>
                <h1 className="font-semibold text-lg mb-1">
                  {elem.title}
                </h1>
                <h6 className="text-sm opacity-50 mb-1">{elem.location}</h6>
                <p className="text-sm mb-1">{elem.details}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <h6 className="text-sm text-amber-600 flex items-center">
                  <i className="ri-star-s-fill mr-1"></i> {elem.ratings}
                </h6>
                <h2 className="font-bold">{elem.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
