const createFilms = (data) => {
  return data.map((film) => ({
    backgroundColor: film.background_color,
    backgroundImage: film.background_image,
    description: film.description,
    director: film.director,
    genre: film.genre,
    id: film.id,
    isFavourite: film.is_favorite,
    image: film.poster_image,
    preview: film.preview_image,
    previewVideoLink: film.preview_video_link,
    ratingScore: film.rating,
    ratingCount: film.scores_count,
    runTime: film.run_time,
    starring: film.starring,
    title: film.name,
    videoLink: film.video_link,
    year: film.released,
  }));
};

const createFilm = (data) => ({
  backgroundColor: data.background_color,
  backgroundImage: data.background_image,
  description: data.description,
  director: data.director,
  genre: data.genre,
  id: data.id,
  isFavourite: data.is_favorite,
  image: data.poster_image,
  preview: data.preview_image,
  previewVideoLink: data.preview_video_link,
  ratingScore: data.rating,
  ratingCount: data.scores_count,
  runTime: data.run_time,
  starring: data.starring,
  title: data.name,
  videoLink: data.video_link,
  year: data.released,
});

export {createFilm, createFilms};
