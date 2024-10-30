import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInputVal: '',
  }

  onChangeInput = event => {
    this.setState({searchInputVal: event.target.value})
  }

  searchSuggestion = value => {
    this.setState({searchInputVal: value})
  }

  render() {
    const {searchInputVal} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion
        .toLowerCase()
        .includes(searchInputVal.toLocaleLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="search-results-card">
          <div className="input-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-img"
            />
            <input
              type="search"
              value={searchInputVal}
              onChange={this.onChangeInput}
              className="input-ele"
              placeholder="Search Google"
            />
          </div>
          <ul className="ul-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestionItem={eachItem}
                key={eachItem.id}
                selectedVal={this.searchSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
