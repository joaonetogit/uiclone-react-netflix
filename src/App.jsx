import React, { useEffect, useState } from 'react';
import './App.css';
import api from './api';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === 'netflixOriginals');
      let randomChosen = Math.floor(
        Math.random() * originals[0].items.results.length,
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer />

      {movieList.length <= 0 && <Loading />}
    </div>
  );
}

export default App;
