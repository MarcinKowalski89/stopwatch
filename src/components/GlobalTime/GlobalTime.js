import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScrollToTop from 'react-scroll-up';
import ReactList from 'react-list';

import { storeClocks, showClock, hideClock } from './actions';
import { setLoaded, unsetLoaded } from '../ContentLoad/actions';
import Clock from '../Clock/Clock';
import Loader from '../Loader/Loader';
import { api } from '../../config/api';

export class GlobalTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.unsetLoaded();
    const fetchUrl = `${api.baseUrl}?key=${api.key}&format=${api.format}`;
    fetch(fetchUrl)
      .then(response => response.json())
      .then((myJson) => {
        const data = myJson.zones.map(city => ({ ...city, show: false }));
        this.props.storeClocks(data);
        this.props.setLoaded();
      })
      .then(() => {
        this.setState({ cities: Object.keys(this.props.clocks).sort() });
      });
  }

  getCityName(zoneName) {
    const cityName = zoneName.split('/').splice(-1);
    const cityDisplayedName = cityName.toString().replace(/_|-/g, ' ');
    return cityDisplayedName;
  }

  renderItem(index) {
    const city = this.state.cities[index];

    return (
      <li
        key={city}
        className={`list-group-item list-group-item-action${  index % 2 ? ' list-group-item-light' : ' list-group-item-info'}`}
        onClick={() => this.props.showClock(city)}
        disabled={this.props.clocks[city].show}
      >
        {this.getCityName(this.props.clocks[city].zoneName)}
      </li>
    );
  }

  render() {
    const style = {
      bottom: 15,
      right: 15,
    };

    return (
      <Fragment>
        { this.props.isLoaded
          ? (
            <Fragment>
              <ul className="list-group list-group-flush list-clocks">
                <ReactList
                  itemRenderer={this.renderItem}
                  length={this.state.cities.length}
                  type="uniform"
                />
              </ul>
              <div className="d-flex flex-wrap clocks-container">
                {this.state.cities.map((city) => {
                    const currentClock = this.props.clocks[city];

                    return (
                      currentClock.show
                      ? <Clock
                        key={city}
                        hideClock={this.props.hideClock}
                        {...currentClock}
                      />
                      : null
                    );
                  })}
              </div>
              <ScrollToTop showUnder={160} style={style}>
                <span className="btn btn-primary">UP</span>
              </ScrollToTop>
            </Fragment>
          )
          : <Loader />
        }
      </Fragment>
    );
  }
}

GlobalTime.propTypes = {
  clocks: PropTypes.objectOf(Object).isRequired,
  hideClock: PropTypes.func.isRequired,
  showClock: PropTypes.func.isRequired,
  storeClocks: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  setLoaded: PropTypes.func.isRequired,
  unsetLoaded: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    clocks: state.globalTime,
    isLoaded: state.contentLoad.isLoaded,
  }),
  {
    storeClocks,
    showClock,
    hideClock,
    setLoaded,
    unsetLoaded,
  },
)(GlobalTime);
