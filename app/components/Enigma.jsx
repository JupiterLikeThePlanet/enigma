var React = require('react');
var Message = require('Message');
var Passphrase = require('Passphrase');

var Enigma = React.createClass({

	getInitialState: function () {
      // var new_passphrase = this.refs.ref_passphrase_component.generatePassphrase();
      return {
          name: '',
          message: '',
          expiration_date: '',
          passphrase: ''
      };
    },



    // generatePassphrase: function(key, passphrase_length) {
    //     console.log("hit generatePassphrase function");

    //    	var pp = ''

    //     var index = (Math.random() * (key.length - 1)).toFixed(0);  

    //     for (var i = 0; i < passphrase_length; i++){
    //     	pp += key.charAt(Math.floor(Math.random()*key.length))
    //     	// console.log(pp += key.charAt(Math.floor(Math.random()*key.length)));
    //     }
        
    //     return pp

    // },

    onGenerate: function(new_passphrase) {
        // e.preventDefault();
        // var new_passphrase = generatePassphrase(key, passphrase_length);

        // var new_passphrase = this.props.handleGenerate(key, passphrase_length);

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
		       <Passphrase handleGenerate={this.onGenerate} passphrase={passphrase} ref="ref_passphrase_component"/>
		   </div>
		);
   }
});

module.exports = Enigma;