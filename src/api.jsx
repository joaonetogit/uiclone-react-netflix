const API_KEY = '1893c11f403a464f367d540436ee7cf5';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'netflixOriginals',
        title: 'Originais Netflix',
        items: await basicFetch(
          `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        ),
      },
      {
        slug: 'trending',
        title: 'Em alta',
        items: await basicFetch(
          `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        ),
      },
      {
        slug: 'topRated',
        title: 'Populares',
        items: await basicFetch(
          `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédias',
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
        ),
      },
      {
        slug: 'romances',
        title: 'Romances',
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
        ),
      },
      {
        slug: 'documentaries',
        title: 'Documentários',
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
        ),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = '';
    if (movieId) {
      switch (type) {
        case 'movie':
          return (info = await basicFetch(
            `/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`,
          ));
        case 'tv':
          return (info = await basicFetch(
            `/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`,
          ));
      }
    }
  },
};
