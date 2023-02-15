import './App.css';
import Post from './Components/Post';
import TripData from './Data/data.js';

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
      {postArray}
    </div>
  );
}

export default App;
