var React = require('react');
var Message = require('Message');
var Passphrase = require('Passphrase');

var Enigma = React.createClass({

	getInitialState: function () {
        return {
            name: '',
            message: '',
            expiration_date: ''
            // passphrase: this.props.passphrase
        };
    },



    generatePassphrase: function(key, passphrase_length) {
        console.log("hit generatePassphrase function");

       	var pp = ''

        var index = (Math.random() * (key.length - 1)).toFixed(0);  

        for (var i = 0; i < passphrase_length; i++){
        	pp += key.charAt(Math.floor(Math.random()*key.length))
        	// console.log(pp += key.charAt(Math.floor(Math.random()*key.length)));
        }
        
        return pp

    },



   render: function () {
   		var name = this.state.name
   		var message = this.state.message
   		var expiration_date = this.state.expiration_date

		return (
		   <div>
		       <h2>Enigma component renders here</h2>
		       <Message name={name} message={message} expiration_date={expiration_date}/>
		       <Passphrase handleGenerate={this.generatePassphrase}/>
		   </div>
		);
   }
});

module.exports = Enigma;