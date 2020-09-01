import { Component } from 'inferno'
import FireImage from '../../assets/Icon/FireImage'
import './RollBetList.css';

export default class RollBetList extends Component {
  render() {
    const { type } = this.props;
    return (
      <div class="Roulette__bets-side is--collapsed">
        <div class="Roulette__holder-curtain"></div>
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
          <div class="Roulette__bets_count">3 Total Bets</div>
          <div class="Roulette__bets_amount">
            <span id="Roulette__bets_amount">0.69</span>
            <FireImage className="Roulette__bets_svg"/>
          </div>
        </div>
        <div class="Roulette__bets-divider"></div>
        <div class="Roulette__bets_collapse">Show all deposits</div>
        <div class="Roulette__bets_players">
          <div class="Roulette__bets_player fades-enter-done">
            <a class="Roulette__bets_player-profile" href="https://steamcommunity.com/profiles/76561198970802180" target="__blank">
              <img class="Roulette__bets_player-image" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6a/6a7ced000c3afca21137adac54d569345f2c315e_full.jpg" alt="" />
              <div class="Roulette__bets_player-name">rustchance.com |TOX| Sm0k1n_Bey</div>
            </a>
            <div class="Roulette__bets_amount">0.56
              <FireImage className="Roulette__bets_svg"/>
            </div>
          </div>
          <div class="Roulette__bets_player fades-enter-done">
            <a class="Roulette__bets_player-profile" href="https://steamcommunity.com/profiles/76561198970802180" target="__blank">
              <img class="Roulette__bets_player-image" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6a/6a7ced000c3afca21137adac54d569345f2c315e_full.jpg" alt="" />
              <div class="Roulette__bets_player-name">rustchance.com |TOX| Sm0k1n_Bey</div>
            </a>
            <div class="Roulette__bets_amount">0.56
              <FireImage className="Roulette__bets_svg"/>
            </div>
          </div>
          <div class="Roulette__bets_player fades-enter-done">
            <a class="Roulette__bets_player-profile" href="https://steamcommunity.com/profiles/76561198970802180" target="__blank">
              <img class="Roulette__bets_player-image" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/6a/6a7ced000c3afca21137adac54d569345f2c315e_full.jpg" alt="" />
              <div class="Roulette__bets_player-name">rustchance.com |TOX| Sm0k1n_Bey</div>
            </a>
            <div class="Roulette__bets_amount">0.56
              <FireImage className="Roulette__bets_svg"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
