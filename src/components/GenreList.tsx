import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  //   const { genres, error, isLoading } = useGenres();

  //   const { data: genres, error, isLoading } = useData<Genre>("/genres");

  const { data: genres, error, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
