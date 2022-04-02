import React, { Component } from 'react'
import SpeechToText from 'speech-to-text';


export default class SpechText extends Component {
    state = {
        interimText: '',
        listening: false,
    };

    onAnythingSaid = text => {
        if (this.state.listening) {
            var konum = text.length;
            konum = konum / 2;
            var text1 = text.substring(0, konum);
            text1 = text1.toLowerCase().trim();
            var text2 = text.substring(konum);
            text2 = text2.toLowerCase().trim();
            if (text1 === text2) {
                text = text1;
            }
            this.setState({ interimText: text });
        }
    };

    onEndEvent = () => {

    };

    onFinalised = text => {
        this.stopListening()
    };

    startListening = () => {
        try {
            this.listener = new SpeechToText(
                this.onFinalised,
                this.onEndEvent,
                this.onAnythingSaid,
                'en-US'
            );
            this.listener.startListening();
            this.setState({ listening: true });
        } catch (err) {
            console.log(err);
        }
    };

    stopListening = () => {
        this.listener.stopListening();
        this.setState({ listening: false });
        this.props.getSpeechText(this.state.interimText)
    };


    render() {
        return (
            <div className="row w-100">
                <div className="col-auto">
                    <button className="btn btn-dark" onClick={() => this.startListening()}>Record Your Voice</button>

                </div>
                <div className="col">
                    <input className='form-control' type='text' value={this.state.interimText} id="speechTextInput"></input>
                </div>
            </div>
        )
    }
}
