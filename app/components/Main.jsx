var React = require('react');
var Message = require('Message');
var Passphrase = require('Passphrase');

var Main = React.createClass({
   render: function () {
       return (
           <div>
               <h2>Main component renders here</h2>
               <Message/>
               <Passphrase/>
           </div>
       );
   }
});

module.exports = Main;