import { Component } from 'inferno';

import RollingScroll from "../../components/RollingScroll/RollingScroll";
import RollsInfo from "../../components/RollsInfo/RollsInfo";
import RollBets from "../../components/RollBets/RollBets";
import RollBetList from "../../components/RollBetList/RollBetList";
import RollMenu from "../../components/RollMenu/RollMenu";
import './Roulette.css';


import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('wss://rustchance.com/feed');

export default class Roulette extends Component {

  componentDidMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }

  render() {
    return (
      <div class="Roulette">
        <div class="App-singlepage_holder">
          <RollMenu />
        </div>
        <div class="App-singlepage_holder">
          <RollingScroll />
          <RollsInfo />
          <RollBets />
          <div class="Roulette__bets">
            <RollBetList type="blue" />
            <RollBetList type="gold" />
            <RollBetList type="red" />
          </div>
        </div>      
      </div>
    )
  }
}
