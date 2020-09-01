/* eslint-disable inferno/style-prop-object */
import { Component } from 'inferno';

import './RollingScroll.css';

export default class RollingScroll extends Component {

  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  render() {
    const { timer, selectedColor } = this.props;
    let visible = timer > 0 && timer < 17000 ? true : false;
    let style = "";
    if (timer > 24900) {
      style = "transition: transform 0ms cubic-bezier(0, 0, 0.28, 1) 0s; transform: matrix(1, 0, 0, 1, 0, 0)";
    }
    else {
      let left = this.state.width / 2;
      if (selectedColor === "red") left += 6255;
      if (selectedColor === "gold") left += 5980;
      if (selectedColor === "blue") left += 6310;
      style = `transition: transform 6000ms cubic-bezier(0, 0, 0.28, 1) 0s; transform: matrix(1, 0, 0, 1, -${left}, 0)`;
    }

    return (
      <div class="Roulette__roller">
        <div class="Roulette__roller-curtain" style={visible ? "display: block;" : "display: none;"}>
          <div class="Roulette__roller-curtain_text">
            <div style="flex: 1 1 0%; min-width: 105px; margin-right: 5px;">Rolling in</div>
            <div style="min-width: 80px;">{(timer/1000).toFixed(2)}</div>
          </div>
        </div>
        <div class="Roulette_indicator"></div>
        <div class="Roulette_spin-container">
          <div
            class="Roulette_spin-items"
            style={style}
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
