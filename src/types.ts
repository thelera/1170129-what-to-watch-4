interface AuthData {
  login: string,
  password: string,
}

enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
};

interface Comment {
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
}

interface Film {
  backgroundColor: string,
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  id: number,
  isFavourite: boolean,
  image: string,
  preview: string,
  previewVideoLink: string,
  ratingCount: number,
  ratingScore: number,
  runTime: number,
  starring: string[],
  title: string,
  videoLink: string,
  year: number,
}

enum FilmPageTab {
  OVERVIEW = `Overview`,
  DETAILS = `Details`,
  REVIEWS = `Reviews`,
};

enum Genre {
  ALL = `All genres`,
  ADVENTURE = `Adventure`,
  COMEDIES = `Comedy`,
  CRIME = `Crime`,
  DOCUMENTARY = `Documentary`,
  DRAMAS = `Drama`,
  FANTASY = `Fantasy`,
  HORROR = `Horror`,
  KIDS_AND_FAMILY = `Kid's and Family`,
  ROMANCE = `Romance`,
  SCI_FI = `Sci - Fi`,
  STORY = `Story`,
  THRILLERS = `Thriller`,
};

export {AuthData, AuthorizationStatus, Comment, Film, FilmPageTab, Genre};