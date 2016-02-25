var React = require('react');
var Bank = require('..//bank/bank.js');  // require the prototype/functions
var sampleAccounts = require('../sample.json');
var AccountDisplay = require('./AccountDisplay');


var AccountList = React.createClass({

  getInitialState: function(){
    return {account: ''}
  },

  buttonClick:function(e){
    var newName = e.target.value
    this.setState({account: newName})
  },

  render: function(){

    var accountNodes = this.props.accounts.map(function(account, index){
      return(
          <div>
            <li key={index}> holder: { account.owner }  </li>

            <button onClick={this.buttonClick } value={account.owner}> Show </button> 
        
          </div>
          )
    }.bind(this));
          

    return(
        <div> 
        { accountNodes } 
        </div>
      )
  },
})

module.exports = AccountList;