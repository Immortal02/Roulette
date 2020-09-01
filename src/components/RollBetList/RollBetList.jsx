/* eslint-disable inferno/style-prop-object */
import { Component } from 'inferno'
import FireImage from '../../assets/Icon/FireImage'
import './RollBetList.css';

export default class RollBetList extends Component {
  render() {
    const { type, data, selectedColor, timer } = this.props;
    let sum = 0;
    data.forEach(item => {
      sum += item.a;
    })
    let selectedFlag = type === selectedColor && timer > 17000 && timer < 19000;
    return (
      <div class="Roulette__bets-side is--collapsed">
        {
          (type !== selectedColor && timer > 17000) && <div class="Roulette__holder-curtain" />          
        }
        {
          (type === selectedColor && timer > 19000) && <div class="Roulette__holder-curtain" />
        }
        <button class="Roulette__side_button Roulette__side_button--black">
          {
            type === "blue"
            ? <div class="Roulette__side_button--coin color--blue"></div>
            : type === "gold"
            ? <div class="Roulette__side_button--coin color--gold"></div>
            : <div class="Roulette__side_button--coin color--red"></div>
          }
          <div class="Roulette__side_button__main">
            <div class="Roulette__side_button__main-text">Place bet</div>
            <div class="Roulette__side_button__main-win">{type === "gold" ? 14 : 2}<sup>x</sup></div>
          </div>
        </button>
        <div class="Roulette__bets_main">
          <div class="Roulette__bets_count">{data.length} Total Bets</div>
          <div class="Roulette__bets_amount">
            {
              selectedFlag
              ? <span id="Roulette__bets_amount" style="color: green">{(sum / 100 * 2).toFixed(2)}</span>
              : <span id="Roulette__bets_amount">{(sum / 100).toFixed(2)}</span>
            }
            <FireImage className="Roulette__bets_svg"/>
          </div>
        </div>
        <div class="Roulette__bets-divider"></div>
        <div class="Roulette__bets_collapse">Show all deposits</div>
        <div class="Roulette__bets_players">
          {
            data.map((item, index) => (
              <div class="Roulette__bets_player fades-enter-done" key={index}>
                <a class="Roulette__bets_player-profile" href="https://steamcommunity.com/profiles/76561198970802180" target="__blank">
                  <img class="Roulette__bets_player-image" src={item.p.a} alt="" />
                  <div class="Roulette__bets_player-name">{item.p.n}</div>
                </a>
                {
                  selectedFlag
                  ? 
                    <div class="Roulette__bets_amount" style="color: green">{(item.a / 100 * 2).toFixed(2)}
                      <FireImage className="Roulette__bets_svg"/>
                    </div>
                  :
                    <div class="Roulette__bets_amount">{(item.a / 100).toFixed(2)}
                      <FireImage className="Roulette__bets_svg"/>
                    </div>
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
