import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDelete = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="name">
            <div className="profile">{initial}</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="balance">
            <h1 className="yourBalance">Your Balance</h1>
            <div className="balance-inner">
              <h1 className="amount">{balance}</h1>
              <p className="para">In Rupees</p>
            </div>
          </div>
          <h1 className="withdraw">Withdraw</h1>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <div className="money-container">
            <ul className="list-buttons">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  DenominationMoney={eachItem}
                  key={eachItem.id}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
