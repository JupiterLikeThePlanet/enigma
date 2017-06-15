var React = require('react');
var Message = require('Message');
var Passphrase = require('Passphrase');

var Enigma = React.createClass({

	getInitialState: function () {
      return {
          name: '',
          message: '',
          expiration_date: '',
          passphrase: ''
      };
    },


    onGenerate: function(new_passphrase) {
        // e.preventDefault();

        this.setState({
            passphrase: new_passphrase
        })

    },


   render: function () {
   		var name = this.state.name
   		var message = this.state.message
   		var expiration_date = this.state.expiration_date
      var passphrase = this.state.passphrase

		return (
		   <div>
		       <h2>Enigma component renders here</h2>
		       <Message name={name} message={message} expiration_date={expiration_date}/>
		       <Passphrase handleGenerate={this.onGenerate} passphrase={passphrase}/>
		   </div>
		);
   }
});

module.exports = Enigma;