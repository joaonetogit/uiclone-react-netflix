import React, { useState } from 'react';
import './index.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const baseUrlImage = 'https://image.tmdb.org/t/p/';

export default ({ title, items }) => {
  const [scrollX, setscrollX] = useState(0);
  const handleLeftArrow = () => {
    let sizeWidth = scrollX + Math.round(window.innerWidth / 2);
    if (sizeWidth > 0) {
      sizeWidth = 0;
    }
    setscrollX(sizeWidth);
  };

  const handleRightArrow = () => {
    let sizeWidth = scrollX - Math.round(window.innerWidth / 2);
    let listFilms = items.results.length * 150;
    if (window.innerWidth - listFilms > sizeWidth) {
      sizeWidth = window.innerWidth - listFilms - 60;
    }
    setscrollX(sizeWidth);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: '50px' }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: '50px' }} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            width: items.results.length * 150,
            marginLeft: scrollX,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`${baseUrlImage}w300/${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
