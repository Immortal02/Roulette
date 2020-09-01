/* eslint-disable inferno/style-prop-object */
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

  constructor(props) {
    super(props)
    this.state = {
      blueList: [],
      goldList: [],
      redList: [],
      showBlueList: [],
      showGoldList: [],
      showRedList: [],
      history: [],
      statistics: {},
      timer: 0,
      selectedColor: "",
      visible: true,
    }
  }

  getColor = number => {
    if (number === 0) return "gold";
    if (number < 8) return "red";
    return "blue";
  }

  componentWillMount() {
    client.onopen = () => {
      client.send(JSON.stringify({room: "roulette", type: "join", data: null}));

    };
    client.onmessage = (message) => {
      let betInfo = JSON.parse(message.data);
      if (betInfo.type === "list") {
        let blueList = betInfo.data.current.black;
        let goldList = betInfo.data.current.green;
        let redList = betInfo.data.current.red;
        let history = betInfo.data.history;
        let statistics = betInfo.data.statistics;
        let timer = betInfo.data.current.timer;
        this.setState({ blueList, goldList, redList, showBlueList: blueList, showGoldList: goldList, showRedList: redList, history, statistics, timer})
      }
      if (betInfo.type === "bet_black") {
        let { blueList } = this.state;
        blueList.push(betInfo.data);
        let showBlueList = this.state.timer > 17000 ? this.state.showBlueList : [...blueList];
        this.setState({blueList, showBlueList}, () => this.forceUpdate())
      }
      if (betInfo.type === "bet_green") {
        let { goldList } = this.state;
        goldList.push(betInfo.data);
        let showGoldList = this.state.timer > 17000 ? this.state.showGoldList : [...goldList];
        this.setState({goldList, showGoldList}, () => this.forceUpdate())
      }
      if (betInfo.type === "bet_red") {
        let { redList } = this.state;
        redList.push(betInfo.data);
        let showRedList = this.state.timer > 16000 ? this.state.showRedList : [...redList];
        this.setState({redList, showRedList}, () => this.forceUpdate())
      }
      if (betInfo.type === "roll") {
        let blueList = betInfo.data.newGame.black;
        let goldList = betInfo.data.newGame.green;
        let redList = betInfo.data.newGame.red;
        let { history } = this.state;
        history.shift();
        history.push([betInfo.data.game, betInfo.data.number]);
        let statistics = betInfo.data.statistics;
        let selectedColor = this.getColor(betInfo.data.number);
        let timer = betInfo.data.newGame.timer;
        this.setState({timer, selectedColor, blueList, goldList, redList});
        setTimeout(() => {
          this.setState({ showBlueList:blueList, showGoldList: goldList, showRedList: redList, history, statistics})
        }, 8000)
      }
    };
    setInterval(() => {
      this.setState({timer: this.state.timer-10});
    }, 10)
  }

  render() {
    const { showBlueList, showGoldList, showRedList, history, statistics, selectedColor, timer } = this.state;
    return (
      <div class="Roulette">
        <div class="App-singlepage_holder">
          <RollMenu />
        </div>
        <div class="App-singlepage_holder">          
          <RollingScroll timer={timer} selectedColor={selectedColor} />
          <RollsInfo statistics={statistics} history={history} />
          <div style="position: relative">
            {
              timer > 19000 && <div class="Roulette__holder-curtain" />
            }
            <RollBets timer={timer} />
            <div class="Roulette__bets">
              <RollBetList type="blue" data={showBlueList} selectedColor={selectedColor} timer={timer} />
              <RollBetList type="gold" data={showGoldList} selectedColor={selectedColor} timer={timer} />
              <RollBetList type="red" data={showRedList} selectedColor={selectedColor} timer={timer} />
            </div>
          </div>
        </div>      
      </div>
    )
  }
}
