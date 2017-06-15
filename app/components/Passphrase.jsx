var React = require('react');


var Passphrase = React.createClass ({

    getDefaultProps: function() {
        return {
            passphrase: 'AmBtRx7l'
        };
    }, 

    getInitialState: function () {
        return {
            passphrase: this.props.passphrase
        };
    },

    onButtonPress: function(e) {
        e.preventDefault();

        console.log("Passphrase button pressed");
        // var passphrase = this.refs.passphrase.value
    },


    render: function () {
        var passphrase = this.state.passphrase
        return (

            <div>

                <div>
                    <p>Your passphrase is: {passphrase}</p>
                </div>

                <div>
                    <button onClick={this.onButtonPress}> Generate New Passphrase </button>
                </div>

            </div>

        );
    }
});

module.exports = Passphrase;