var React = require('react');


var Passphrase = React.createClass ({

    // generatePassphrase: function(key, passphrase_length) {
    //     console.log("hit generatePassphrase function");

    //     var index = (Math.random() * (key.length - 1)).toFixed(0);  
    //     return passphrase_length > 0 ? key[index] + generatePassphrase(passphrase_length - 1, key) : '';

    //     // return key[index] + generatePassphrase(passphrase_length - 1, key);
    //     // var passphrase = this.refs.passphrase.value
    // },

    // getDefaultProps: function() {
    //     return {
    //         passphrase: ''
    //     };
    // }, 

    // getInitialState: function () {
    //     var new_passphrase = this.props.handleGenerate(key, passphrase_length);
    //     return {
    //         passphrase: new_passphrase
    //     };
    // },

    // onGenerate: function(e) {
    //     e.preventDefault();
    //     // var new_passphrase = generatePassphrase(key, passphrase_length);
    //     var new_passphrase = this.props.handleGenerate(key, passphrase_length);

    //     this.setState({
    //         passphrase: new_passphrase
    //     })

    // },

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