import { Component } from 'inferno';
import FireImage from '../../assets/Icon/FireImage';
import './RollBets.css';

export default class RollBets extends Component {

  constructor(props) {
    super(props)
    this.state = {
      betNum: 0
    }
  }

  calculateValue = (type, value) => {
    let { betNum } = this.state;
    betNum = betNum * 100;
    switch(type) {
      case "add":
        betNum += value;
        break;
      case "divide":
        betNum = Math.floor(betNum / 2);
        break;
      case "multi":
        betNum = betNum * 2;
        break;
      case "max":
        betNum = 0;
        break;
      default:
        break;
    }
    this.setState({ betNum: betNum / 100 });
  }

  render() {
    return (
      <div class="Roulette__holder">
        <div>
          <div class="Roulette_bett_balance">
            <div class="Roulette_bett_balance-text">Balance:</div>
            <span class="Roulette_bet_balance-value">0</span>
            <FireImage className="Roulette_bett_balance-flame" />
          </div>
        </div>
        <div class="Roulette__bett">
          <div class="Roulette__bett_inside">
            <div class="Roulette__bett_input">
              <FireImage className="Roulette__bett_input-flame" />
              <input
                class="Roulette__bett_input-field"
                type="text"
                inputmode="decimal"
                value={this.state.betNum}
                onChange={e => this.setState({betNum: e.target.value})}
              />
            </div>
            <div class="Roulette_bet_helpers">
              <button class="Roulette_bet_helper" onClick={() => this.setState({betNum: 0})}>Clear</button>
              <button class="Roulette_bet_helper" onClick={() => this.calculateValue("add", 5)}>+0.05</button>
              <button class="Roulette_bet_helper" onClick={() => this.calculateValue("add", 50)}>+0.50</button>
              <button class="Roulette_bet_helper" onClick={() => this.calculateValue("add", 100)}>+1</button>
              <button class="Roulette_bet_helper" onClick={() => this.calculateValue("add", 1000)}>+10</button>
              <button class="Roulette_bet_helper" onClick={() => this.calculateValue("divide")}><sup>1</sup>/<sub>2</sub></button>
              <button class="Roulette_bet_helper" onClick={() => this.calculateValue("multi")}>2X</button>
              <button class="Roulette_bet_helper" onClick={() => this.calculateValue("max")}>Max</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
