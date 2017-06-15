var React = require('react');

const key ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const passphrase_length = 6

var Passphrase = React.createClass ({

    // generatePassphrase: function(key, passphrase_length) {
    //     console.log("hit generatePassphrase function");

    //     var index = (Math.random() * (key.length - 1)).toFixed(0);  
    //     return passphrase_length > 0 ? key[index] + generatePassphrase(passphrase_length - 1, key) : '';

    //     // return key[index] + generatePassphrase(passphrase_length - 1, key);
    //     // var passphrase = this.refs.passphrase.value
    // },

    getDefaultProps: function() {
        return {
            passphrase: ''
        };
    }, 

    getInitialState: function () {
        var new_passphrase = this.props.handleGenerate(key, passphrase_length);
        return {
            passphrase: new_passphrase
        };
    },

    onGenerate: function(e) {
        e.preventDefault();
        // var new_passphrase = generatePassphrase(key, passphrase_length);
        var new_passphrase = this.props.handleGenerate(key, passphrase_length);

        this.setState({
            passphrase: new_passphrase
        })

    },

    render: function () {
        var passphrase = this.state.passphrase

        return (

            <div>

                <div>
                    <p>Your passphrase is: {passphrase}</p>
                </div>

                <div>
                    <button onClick={this.onGenerate}> Generate New Passphrase </button>
                </div>

            </div>

        );
    }
});

module.exports = Passphrase;