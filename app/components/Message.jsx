var React = require('react');


var Message = React.createClass ({

    // getInitialState: function () {
    //     return {
    //         name: '',
    //         message: '',
    //         expiration_date: ''
    //         // passphrase: this.props.passphrase
    //     };
    // },

    onFormSubmit: function(e) {
        e.preventDefault();
    },


    render: function () {
        return (

            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div id="name_input">

                      <h5> Name: </h5>
                      
                      <input type="text" name="name" placeholder="Enter Name" value={this.props.name}/>
                      
                    </div>

                    <div id="message_input">
                      <h5>Message:</h5>
                      
                      <textarea rows="10" cols="30" maxlength="1200" placeholder="Enter Message" value={this.props.message}>
                      </textarea>

                    </div>

                    <div id="expiration_input">
                        <input type="text" name="expiration_date" placeholder="Enter Expiration Date" value={this.props.expiration_date}/>
                    </div>

                </form>
            </div>

        );
    }
});

module.exports = Message;