import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, selectedVal} = props
  const {suggestion} = suggestionItem

  const selctingInput = () => {
    selectedVal(suggestion)
  }

  return (
    <li className="list-ele">
      <p className="list-item">{suggestion}</p>
      <button type="button" className="btn-ele" onClick={selctingInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-btn"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
