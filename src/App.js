import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
      super();

      this.state = {
          string: "My name is Bharat",
          monstors: [],
          searchField: ""
      }

      // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() { // Fetching backend api data and put them into the setState for re-rendering
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => this.setState( {monstors: users} ));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  render() { 

      const { monstors, searchField } = this.state;
      const filterMonstors = monstors.filter(monstor =>
         monstor.name.toLowerCase().includes(searchField.toLowerCase()) 
      );
      return (
          <div className="App">
            <header className="App-header">
              <h1>Monstors Rolodex</h1>
              <SearchBox placeholder="Search Monstors" handleChange={this.handleChange}/>
              <CardList monstors={filterMonstors} />
              <p>{ this.state.string }</p>
              <button onClick={ () => this.setState( { string: "Hello may name is Nishi"})}>Chnage text</button>
              
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Basic />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
