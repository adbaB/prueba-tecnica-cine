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
    return  image !== null ?`https://image.tmdb.org/t/p/${type+image}`: 'https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg'
}

export const getDetailMovie = (id) => {
  const apiUrl = getApi(`movie/${id}`);
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