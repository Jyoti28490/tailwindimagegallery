import React from 'react';

const ImageCard = ({ image, search, isloading }) => {
  const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ml-3">
      <img className="w-full" src={image.webformatURL} />
      <div className="px-6 py-4 bg-stone-100">
        <div className="font-bold text-purple-500 text-xl">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 bg-stone-100 ">
        {tags.map((tag) => (
          <div className="inline-block bg-purple-400 rounded-full px-3 py-1 text-sm text-zinc-100 font-semibold mr-2 sm:mt-2 sm:mb-2 md:mt-3 md:mb-3">
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
