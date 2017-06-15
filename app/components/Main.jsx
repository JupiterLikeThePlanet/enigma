var React = require('react');
var Message = require('Message');
var Passphrase = require('Passphrase');

var Main = React.createClass({

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

	// componentWillMount: function () {
 //        var key ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
 //        var passphrase_length = 6

 //        generatePassphrase(key, passphrase_length);
 //    },


   render: function () {
       return (
           <div>
               <h2>Main component renders here</h2>
               <Message/>
               <Passphrase handleGenerate={this.generatePassphrase}/>
           </div>
       );
   }
});

module.exports = Main;