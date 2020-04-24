
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return <ContactForm/>
    }
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            department: 'BOK',
            mail: '',
            text:'',
            info: [],
            sent: ''

        }
    }

    render() {
        let infos= this.state.info.map((e,i) => {
            return <p key={i}>{e}</p>
        })

        return <div>
            <div>{infos}</div>
            <div style={{color: 'green'}}>{this.state.sent}</div>
        <form onSubmit={() => this.handleSubmit}>
                <input type='text' value={this.state.name} onChange={this.handleNameChange}></input>
                <select onChange={this.handleDepartChange} value={this.state.department}>
                    <option  value='BOK'>BOK</option>)
                    <option  value='Dział techniczny'>Dział techniczny</option>)
                    <option  value='Marketing'>Marketing</option>)
                    </select>
                <input type='email' value={this.state.mail} onChange={this.handleMailChange}></input>
                <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
                <input type='submit' value='Wyślij'></input>
            </form>
            </div>
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleDepartChange = (event) => {
        this.setState({
            department: event.target.value
        })
    }
    handleMailChange = (event) => {
        this.setState({
            mail: event.target.value
        })
    }
    handleTextChange = (event) => {
        this.setState={
            text: event.target.value
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({info: [], sent: ''});

        let newInfos = [];
        if(this.state.name == '')
            newInfos.push('Pole imię musi zostać uzupełnione');

        if(this.state.email.indexOf('@') == -1)
            newInfos.push('Pole email musi zostać uzupełnione i zawierać znak @');

        if(this.state.text == '')
            newInfos.push('Pole wiadomość musi zostać uzupełnione');

        if(newInfos.length == 0) {
            this.setState({sent: 'Dziękujemy za wiadomość. Wysłano do wydziału: '+this.state.department})
        } else {
            this.setState({info: newInfos});
        }

    }
}


//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});