import {Component} from 'react'
import './index.css'
import CreateCard from '../MoneyDetails/index'

const cardDetailsList = [
  {
    moneyType: 'Your Balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    alt: 'balance',
    initialBalance: '0',
    bg: '#84cc16',
    bgColor: 'green',
  },
  {
    moneyType: 'Your Income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    alt: 'income',
    initialBalance: '0',
    bg: '#06b6d4',
    bgColor: 'blue',
  },
  {
    moneyType: 'Your Expenses',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    alt: 'expenses',
    initialBalance: '0',
    bg: ' #7c3aed',
    bgColor: 'violet',
  },
]

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {title: '', amount: ''}

  onAddTransaction = event => {
    event.preventDefault()
  }

  onChangeTitle = event => {
    console.log('title triggered')
  }

  onChangeAmount = event => {
    console.log('Amount triggered')
  }

  render() {
    const {title, amount} = this.state

    return (
      <div className="bg">
        <div className="name-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <ul className="money-details-container">
          {cardDetailsList.map(each => (
            <CreateCard details={each} key={each.alt} />
          ))}
        </ul>

        <div className="below-container">
          <div className="input-container">
            <h4 className="AddTransaction">Add Transaction</h4>

            <label htmlFor="title" className="title-label">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="TITLE"
              className="input-title"
            />

            <label htmlFor="title" className="title-label">
              AMOUNT
            </label>
            <input
              type="text"
              id="title"
              value={amount}
              placeholder="AMOUNT"
              className="input-title"
            />

            <label htmlFor="title" className="title-label">
              TYPE
            </label>
            <select className="input-title">
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </select>

            <button className="add-button">Add</button>
          </div>

          <div className="history-container">history</div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
