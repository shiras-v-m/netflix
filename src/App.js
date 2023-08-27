import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {fetchNetflixOriginals,fetchActionMovies,fetchComedyMovies,fetchHorrorMovies,fetchRomanceMovies,fetchDocumentaries} from './urls'
function App() {
  return (
    <>
    <NavBar className="navbar"/>
    <Banner/>
    <RowPost title="Netflix originals" url={fetchNetflixOriginals} />
    <RowPost title="Action Movies" url={fetchActionMovies} isSmall/>
    <RowPost title="Comedy Movies" url={fetchComedyMovies} isSmall/>
    <RowPost title="Horrer Movies" url={fetchHorrorMovies} isSmall/>
    <RowPost title="Romance Movies" url={fetchRomanceMovies} isSmall/>
    <RowPost title="Romance Movies" url={fetchDocumentaries} isSmall/>
    </>
  );
}

export default App;
