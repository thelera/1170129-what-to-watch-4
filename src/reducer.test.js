import {reducer, ActionCreator, ActionType} from "./reducer.js";

const films = [
  {
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`David Yates`],
    genres: [`Fantasy`, `Kid's and Family`, `Adventure`, `Story`],
    id: String(new Date() + Math.random()),
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.2,
    ratingLevel: `good`,
    ratingCount: 248,
    runTime: `1h 55m`,
    starring: [`Eddie Redmayne`, `Katherine Waterson`, `Dan Folger`],
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    year: 2015,
  },
  {
    backgroundImage: `img/bohemian-rhapsody.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Brayan Singer`],
    genres: [`Story`, `Drama`],
    id: String(new Date() + Math.random()),
    image: `img/bohemian-rhapsody.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 7.4,
    ratingLevel: `good`,
    ratingCount: 150,
    runTime: `1h 55m`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Bohemian Rhapsody`,
    year: 2018,
  },
  {
    backgroundImage: `img/macbeth.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Brayan Singer`],
    genres: [`Biography`, `Music`, `Drama`],
    id: String(new Date() + Math.random()),
    image: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 6.9,
    ratingLevel: `normal`,
    ratingCount: 548,
    runTime: `1h 55m`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    title: `Macbeth`,
    year: 2010,
  },
  {
    backgroundImage: `img/aviator.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Martin Scoresese`],
    genres: [`Biography`, `Drama`, `Story`],
    id: String(new Date() + Math.random()),
    image: `img/aviator.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    ratingScore: 8.9,
    ratingLevel: `very good`,
    ratingCount: 140,
    runTime: `1h 55m`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Matt Ross`],
    title: `Aviator`,
    year: 2011,
  },
  {
    backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Linn Ramsy`],
    genres: [`Thriller`, `Detective`, `Drama`],
    id: String(new Date() + Math.random()),
    image: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    ratingScore: 9.5,
    ratingLevel: `excellent`,
    ratingCount: 200,
    runTime: `1h 55m`,
    starring: [`Tilda Swinton`, `Jonh Reilly`, `Erza Miller`],
    title: `We Need To Talk About Kevin`,
    year: 2010,
  },
  {
    backgroundImage: `img/what-we-do-in-the-shadows.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Jemaine Clement`, `Taika Waititi`],
    genres: [`Comedy`],
    id: String(new Date() + Math.random()),
    image: `img/what-we-do-in-the-shadows.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    ratingScore: 7.0,
    ratingLevel: `good`,
    ratingCount: 41,
    runTime: `1h 55m`,
    starring: [`Jemaine Clement`, `Taika Waititi`, `Jonny Brugh`],
    title: `What We Do In The Shadows`,
    year: 2014,
  },
  {
    backgroundImage: `img/revenant.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Alejandro G. Inarritu`],
    genres: [`Action`, `Drama`, `Western`, `Story`],
    id: String(new Date() + Math.random()),
    image: `img/revenant.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    ratingScore: 6.5,
    ratingLevel: `normal`,
    ratingCount: 8,
    runTime: `1h 55m`,
    starring: [`Leonardo DiCaprio`, `Tom Hardy`, `Domhnall Gleeson`],
    title: `Revenant`,
    year: 2015,
  },
  {
    backgroundImage: `img/johnny-english.jpg`,
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: [`Antony Mingella`],
    genres: [`Crime`, `Action`],
    id: String(new Date() + Math.random()),
    image: `img/johnny-english.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    ratingScore: 5.1,
    ratingLevel: `not bad`,
    ratingCount: 103,
    runTime: `1h 55m`,
    starring: [`Ralph Fiennes`, `Kristin Scott Thomas`, `Juliette Binoche`],
    title: `Jonny English`,
    year: 1996,
  },
];

it(`Reducer should change key "genre" by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `All films`,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Action`,
  })).toEqual({
    allFilms: films,
    genre: `Action`,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: null,
  })).toEqual({
    allFilms: films,
    genre: null,
    id: `sdsd!sgdg35`,
    promoFilm: films[0],
  });
});

it(`Reducer should change key "id" by a given value`, () => {
  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    id: `sdsd!sgdg35`,
    promoFilm: films[2],
  }, {
    type: ActionType.CHANGE_FILM_ID,
    payload: `!!!sdsd!sgdg35dfdfdf`,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    id: `!!!sdsd!sgdg35dfdfdf`,
    promoFilm: films[2],
  });

  expect(reducer({
    allFilms: films,
    genre: `Adventure`,
    id: `dvdfvdfvv34234`,
    promoFilm: films[2],
  }, {
    type: ActionType.CHANGE_FILM_ID,
    payload: `vdvdfv`,
  })).toEqual({
    allFilms: films,
    genre: `Adventure`,
    id: `vdvdfv`,
    promoFilm: films[2],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing genre returns correct action`, () => {
    expect(ActionCreator.genreAction(`Sci-fi`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Sci-fi`,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.filmIdAction(`13sdfsf`)).toEqual({
      type: ActionType.CHANGE_FILM_ID,
      payload: `13sdfsf`,
    });
  });
});