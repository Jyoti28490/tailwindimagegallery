import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('flower');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <>
      <ImageSearch searchText={(text) => setSearch(text)} />

      <div className="container mx-auto my-4 cursor-pointer">
        {isloading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">
            Photos are loading ...
          </h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                search={search}
                isloading={isloading}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
