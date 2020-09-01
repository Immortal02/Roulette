/* eslint-disable inferno/style-prop-object */
import { Component } from 'inferno';

import './RollingScroll.css';

export default class RollingScroll extends Component {

  constructor(props) {
    super(props)
    this.state = {
      interval: 1000,
      visible: true,
    }
  }

  componentDidMount() {
    let interval = 1000;
    setInterval(() => {
      if (interval === 0) {        
        this.setState({visible: !this.state.visible});
        interval = 1000;
      }
      interval--;
      this.setState({interval});
    }, 10)
  }

  render() {
    const {visible, interval} = this.state;
    return (
      <div class="Roulette__roller">
        <div class="Roulette__roller-curtain" style={visible ? "display: block;" : "display: none;"}>
          <div class="Roulette__roller-curtain_text">
            <div style="flex: 1 1 0%; min-width: 105px; margin-right: 5px;">Rolling in</div>
            <div style="min-width: 80px;">{(interval/100).toFixed(2)}</div>
          </div>
        </div>
        <div class="Roulette_indicator"></div>
        <div class="Roulette_spin-container">
          <div
            class="Roulette_spin-items"
            style={visible ? "transition: transform 0ms cubic-bezier(0, 0, 0.28, 1) 0s; transform: matrix(1, 0, 0, 1, 0, 0);" : "transition: transform 5000ms cubic-bezier(0, 0, 0.28, 1) 0s; transform: matrix(1, 0, 0, 1, -6346.44, 0);"}
          >
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
            <div class="spin-item red"><span>1</span></div>
            <div class="spin-item black"><span>14</span></div>
            <div class="spin-item red"><span>2</span></div>
            <div class="spin-item black"><span>13</span></div>
            <div class="spin-item red"><span>3</span></div>
            <div class="spin-item black"><span>12</span></div>
            <div class="spin-item red"><span>4</span></div>
            <div class="spin-item green"><span>0</span></div>
            <div class="spin-item black"><span>11</span></div>
            <div class="spin-item red"><span>5</span></div>
            <div class="spin-item black"><span>10</span></div>
            <div class="spin-item red"><span>6</span></div>
            <div class="spin-item black"><span>9</span></div>
            <div class="spin-item red"><span>7</span></div>
            <div class="spin-item black"><span>8</span></div>
          </div>
        </div>
      </div>
    )
  }
}
