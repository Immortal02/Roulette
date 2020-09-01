/* eslint-disable jsx-a11y/alt-text */
import { Component } from 'inferno';

import './RollsInfo.css';

export default class RollsInfo extends Component {
  render() {
    return (
      <div class="Roulette__info">
        <div class="Roulette__previous">
          <div class="Roulette__previous__field">
            <img class="Roulette__previous__field-image" src="/assets/image/blue.png" />
              <div class="Roulette__previous__field-number">48</div>
          </div>
          <div class="Roulette__previous__field">
            <img class="Roulette__previous__field-image" src="/assets/image/gold.png" />
            <div class="Roulette__previous__field-number">6</div>
          </div>
          <div class="Roulette__previous__field">
            <img class="Roulette__previous__field-image" src="/assets/image/red.png" />
            <div class="Roulette__previous__field-number">46</div>
          </div>
        </div>
        <div class="Roulette__history">
          <div class="Roulette__history-text">Previous rolls:</div>
          <div class="Roulette__history-numbers">
            <img class="Roulette__history-icon" title="1080018" src="/assets/image/blue.png" />
            <img class="Roulette__history-icon" title="1080017" src="/assets/image/blue.png" />
            <img class="Roulette__history-icon" title="1080016" src="/assets/image/red.png" />
            <img class="Roulette__history-icon" title="1080015" src="/assets/image/red.png" />
            <img class="Roulette__history-icon" title="1080014" src="/assets/image/blue.png" />
            <img class="Roulette__history-icon" title="1080013" src="/assets/image/red.png" />
            <img class="Roulette__history-icon" title="1080012" src="/assets/image/blue.png" />
            <img class="Roulette__history-icon" title="1080011" src="/assets/image/blue.png" />
            <img class="Roulette__history-icon" title="1080010" src="/assets/image/red.png" />
            <img class="Roulette__history-icon" title="1080009" src="/assets/image/red.png" />
          </div>
        </div>
      </div>
    )
  }
}
