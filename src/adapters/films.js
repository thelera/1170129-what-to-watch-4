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

const createFilms = (data) => data.map((film) => createFilm(film));

export {createFilm, createFilms};
