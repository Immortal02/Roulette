import { version, Component } from 'inferno';
import Logo from './logo';
import './App.css';
import Roulette from './containers/Roulette';

class App extends Component {
  render() {
    return (
      <Roulette />
    );
  }
}

export default App;
