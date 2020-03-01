import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import DisplayArea from './components/DisplayArea';
import { fetchFlickr } from './service/fetchFlickr';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

class App extends Component {
  state = {
    searchString: '',
    feeds: [],
    loading: false,
    error: null
  };

  handleSearch = () => {
    const { searchString } = this.state;
    if (searchString && searchString.trim()) {
      this.setState({ loading: true });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        fetchFlickr(searchString)
          .then(response => {
            this.setState({
              feeds: response,
              loading: false,
              error: null
            });
          })
          .catch(err => {
            this.setState({
              loading: false,
              error: err
            });
          });
      }, 500);
    }
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.setState(
      {
        searchString: value
      },
      () => {
        this.handleSearch();
      }
    );
  };

  render() {
    const { feeds, loading, error, searchString } = this.state;
    return (
      <React.Fragment>
        <SearchBar
          searchString={searchString}
          handleInputChange={this.handleInputChange}
        />
        <DisplayArea
          feeds={feeds}
          loading={loading}
          error={error}
          searchString={searchString}
        />
      </React.Fragment>
    );
  }
}

export default App;
