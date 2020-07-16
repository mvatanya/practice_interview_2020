import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// https://jsonplaceholder.typicode.com/albums

// Load albums api
// Display albums as a grid of tiles (show title and id)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {albums: []};
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();
    // console.log(JSON.stringify(albums));
    this.setState({albums: albums})
    console.log(this.state.albums[0])
  }
  
  render() {

    let albums = this.state.albums.map(album => {
      return (<tr><td>{album.id}</td><td>{album.title}</td></tr>)
    })
    return (
      <div className="App">
        {/* <div>{myJson}</div> */}
        <h1>Hello Fountain</h1>
        <h2>Start editing and this page will update itself</h2>
        <table>
          <thead>
          <tr>
              <th>ID</th>
              <th>TITLE</th>
          </tr>
          </thead>
          <tbody>
            {albums}
        </tbody>
      </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

//PART2


import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/photos?albumId=2
// Load albums api
// Display albums as a grid of tiles (show title and id)
// On clicking an album tile, fetch and show the album's photos as tiles
// Add a back button to go back to viewing all albums

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [], click: false, photos: [] };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();
    // console.log(JSON.stringify(albums));
    this.setState({ albums });
    console.log(this.state.albums[0]);
  }

  handleClick = async evt => {
    this.setState({ click: true });
    let id = evt.target.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    const photos = await response.json();
    this.setState({ photos });
  };

  handleGoBack = () => {
    this.setState({ click: false });
  };
  render() {
    let albums = this.state.albums.map(album => {
      return (
        <tr key={album.id} onClick={this.handleClick}>
          <td id={album.id}>{album.id}</td>
          <td id={album.id}>{album.title}</td>
        </tr>
      );
    });
    let photos = this.state.photos.map(photo => {
      return (
        <tr>
          <td>
            <img src={photo.thumbnailUrl} alt="album photo" />
          </td>
        </tr>
      );
    });
    return !this.state.click ? (
      <div className="App">
        {/* <div>{myJson}</div> */}
        <h1>Hello Fountain</h1>
        <h2>Start editing and this page will update itself</h2>
        <table>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
          </tr>
          <tbody>{albums}</tbody>
        </table>
      </div>
    ) : (
      <div>
        <table>
          <th>photo</th>
        </table>
        <tbody>{photos}</tbody>
        <button onClick={this.handleGoBack}>Go back</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
