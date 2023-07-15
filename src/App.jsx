import "./App.css";
import Categories from "./components/Categories";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <GenreMovieList />
    </>
  );
}

export default App;
