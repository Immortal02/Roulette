/* eslint-disable jsx-a11y/alt-text */
import { Component } from 'inferno';

import './RollsInfo.css';

export default class RollsInfo extends Component {

  getColor = number => {
    if (number === 0) return "gold";
    if (number < 8) return "red";
    return "blue";
  }

  render() {
    const { statistics, history } = this.props;
    return (
      <div class="Roulette__info">
        <div class="Roulette__previous">
          <div class="Roulette__previous__field">
            <img class="Roulette__previous__field-image" src="/assets/image/blue.png" />
            <div class="Roulette__previous__field-number">{statistics.blue}</div>
          </div>
          <div class="Roulette__previous__field">
            <img class="Roulette__previous__field-image" src="/assets/image/gold.png" />
            <div class="Roulette__previous__field-number">{statistics.gold}</div>
          </div>
          <div class="Roulette__previous__field">
            <img class="Roulette__previous__field-image" src="/assets/image/red.png" />
            <div class="Roulette__previous__field-number">{statistics.red}</div>
          </div>
        </div>
        <div class="Roulette__history">
          <div class="Roulette__history-text">Previous rolls:</div>
          <div class="Roulette__history-numbers">
            {
              history.map((item, index) => {
                if (this.getColor(item[1]) === "blue")
                  return <img class="Roulette__history-icon" title={item[0]} src="/assets/image/blue.png" />
                else if (this.getColor(item[1]) === "gold")
                  return <img class="Roulette__history-icon" title={item[0]} src="/assets/image/gold.png" />
                else
                  return <img class="Roulette__history-icon" title={item[0]} src="/assets/image/red.png" />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
