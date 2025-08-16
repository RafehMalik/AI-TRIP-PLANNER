import React, { useEffect, useState } from "react";

function PlaceImage({ query }) {
  const [img, setImg] = useState(null);
  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query.query}&client_id=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImg(data.results[0]?.urls?.small);
      });
  }, [query]);

  return (
    <img src={img || "/image.png"} alt={query} className={query.styling} />
  );
}

export default PlaceImage;
