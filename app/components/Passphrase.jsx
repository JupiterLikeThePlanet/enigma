var React = require('react');


var Passphrase = React.createClass ({

    generatePassphrase: function() {
        // e.preventDefault

        const key ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        const passphrase_length = 6

        console.log("hit generatePassphrase function");

        var pp = ''

        var index = (Math.random() * (key.length - 1)).toFixed(0);  

        for (var i = 0; i < passphrase_length; i++){
            pp += key.charAt(Math.floor(Math.random()*key.length))
        }
        
        this.props.handleGenerate(pp);

    },

    componentWillMount: function() {
      this.generatePassphrase()
    },


    render: function () {
        var passphrase = this.props.passphrase

        return (

            <div>

                <div>
                    <p>Your passphrase is: {passphrase}</p>
                </div>

                <div>
                    <button onClick={this.generatePassphrase}> Generate New Passphrase </button>
                </div>

            </div>

        );
    }
});

module.exports = Passphrase;