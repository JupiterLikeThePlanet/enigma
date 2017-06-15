var React = require('react');


var Passphrase = React.createClass ({

    // generatePassphrase: function(key, passphrase_length) {
    //     console.log("hit generatePassphrase function");

    //     var index = (Math.random() * (key.length - 1)).toFixed(0);  
    //     return passphrase_length > 0 ? key[index] + generatePassphrase(passphrase_length - 1, key) : '';

    //     // return key[index] + generatePassphrase(passphrase_length - 1, key);
    //     // var passphrase = this.refs.passphrase.value
    // },

    onGenerate: function(e) {
        e.preventDefault();
        console.log("Passphrase button pressed");

        var key ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        var passphrase_length = 6

        // debugger
        // var new_passphrase = generatePassphrase(key, passphrase_length);
        var new_passphrase = this.props.handleGenerate(key, passphrase_length);

        console.log(new_passphrase);
        // debugger
        this.setState({
            passphrase: new_passphrase
            // passphrase: generatePassphrase(key, passphrase_length)
        })

    },

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

    // componentWillMount: function () {
    //     var key ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    //     var passphrase_length = 6

    //     generatePassphrase(key, passphrase_length);
    // },

    // onComponentMount: function () {
    //     var key ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    //     var passphrase_length = 6

    //     generatePassphrase(key, passphrase_length);
    // },




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