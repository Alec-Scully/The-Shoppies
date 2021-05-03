import MovieList from './components/MovieList.js';
import Nominations from './components/Nominations.js';
import SearchBar from './components/SearchBar.js';

function App() {
  return (
    <div>
      <h1>The Shoppies</h1>
      <SearchBar></SearchBar>
      <MovieList></MovieList>
      <Nominations></Nominations>
    </div>
  );
}

export default App;
