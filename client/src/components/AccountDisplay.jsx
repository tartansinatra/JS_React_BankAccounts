var React = require('react');
var Bank = require('..//bank/bank.js');  // require the prototype/functions
var sampleAccounts = require('../sample.json');

var AccountDisplay = React.createClass({

  render: function(){




    return(
      <div>

      <button type="button" onClick={this.addInterest}>Add Interest</button>
      

      </div>

      )
  }
})

module.exports = AccountDisplay;