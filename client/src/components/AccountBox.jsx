var React = require('react');
var Bank = require('..//bank/bank.js');  // require the prototype/functions
var sampleAccounts = require('../sample.json');
var AccountList = require('./AccountList.jsx');

var AccountBox = React.createClass({

  addInterest: function(){
    for (var account of this.state.accounts) {
      account.amount = (account.amount *1.1).toFixed(2)
    }
    this.setState({
      accounts: this.state.accounts
    })
  },


  getInitialState: function(){
    return {accounts: sampleAccounts}
  },

  render: function(){
    var bank = new Bank();
    for (var account of this.state.accounts){
      bank.addAccount(account); 
    }

    return(
      <div> 
        <h2> Account Box </h2>
        <h3> Personal Acc Total £: { bank.totalCash('personal') }</h3> 
        <h3> Business Acc Total £: { bank.totalCash('business') }</h3> 
        <AccountList accounts={ this.props.accounts }>  </AccountList>

        <AccountDisplay account={this.state.account}> </AccountDisplay>
        
        
      </div>

      )
  }
})

module.exports = AccountBox;