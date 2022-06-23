import { getApi } from "../Config/getApi";

export const discoverMovies =  () => {
  const apiUrl = getApi("discover/movie");

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new error(error);
    });
};
export const findMovies = async(query) =>{
  if (query !== ''){
    let apiUrl = getApi('search/movie')
    apiUrl = apiUrl + `&query=${query}`
    
    return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new error(error);
    });
  }
  else{
   return await discoverMovies()
  }

}
export const getImageMovie =  (image, type = 'original') =>{
    return `https://image.tmdb.org/t/p/${type+image}`
}

export const getDetailMovie = (id) => {
  const apiUrl = getApi(`movie/${id}`);
  console.log(apiUrl)
  return fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    throw new error(error);
  });
 
}

export const getMovieVideo = async (id) =>{
  const apiUrl = getApi(`movie/${id}/videos`);
  return fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    throw new error(error);
  });
}
export const  getLinkVideo = (link) => {
  return `https://www.youtube.com/embed/${link}`
}