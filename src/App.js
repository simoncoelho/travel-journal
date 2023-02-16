import './App.css';
import Post from './Components/Post';
import TripData from './Data/data.js';
import logo from './Images/logo.svg';

TripData.map((item) => console.log(item.title));

function App() {
  const postArray = TripData.map((item) => {
    console.log(item.title);
    return (
        <Post 
          {...item}
        />
    )});
  

  return (
    <div className="App">
      <div className='header-bar'>
        <img src={logo} alt="logo" />
        <h1>my travel journal</h1>
      </div>
      {postArray}
    </div>
  );
}

export default App;
