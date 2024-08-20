'use server'

export default async function fetchData(){
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=dc3b868166ffb5e89b71f42b9958f8a7&language=en-US&page=1');
  const data = await res.json();
  return data;
}