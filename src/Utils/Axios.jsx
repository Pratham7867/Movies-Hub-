import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFiNTNkNmUzNWFhYTc0MzUyZGQ4ZTU5NDAzMDU1NyIsIm5iZiI6MTc0MDc1MDUwNy4xMjgsInN1YiI6IjY3YzFiZWFiMTBlNzljMzQyNGEyNzNjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DyMKpWPYA9nQk_BIdZz7pDAkf8_gBe1PQFHqrjiZXqw'
  }
});

export default instance;
