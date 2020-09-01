import { Component } from 'inferno';

import SoundImage from "../../assets/Icon/SoundImage";
import CheckImage from "../../assets/Icon/CheckImage";
import './RollMenu.css';

export default class RollMenu extends Component {
  render() {
    return (
      <div class="Game__submenu">
        <div class="Game__submenu-right">
          <div class="Game__submenu-item">
            <SoundImage />
          </div>
          <a class="Game__submenu-item" href="/roulette/provably-fair">
            <CheckImage />
            <span class="Game__submenu-item--noMobile">Provably Fair</span>
          </a>
        </div>
      </div>
    )
  }
}
