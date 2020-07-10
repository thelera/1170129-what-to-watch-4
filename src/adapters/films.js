const createFilms = (data) => {
  return data.map((film) => ({
    backgroundColor: film.background_color,
    backgroundImage: film.background_image,
    description: film.description,
    director: film.director,
    genre: film.genre,
    id: film.id,
    isFavourite: film.is_favourite,
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

export {createFilms};
