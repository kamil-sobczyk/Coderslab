import React from 'react';
import ReactDOM from 'react-dom';

class CardGenerator extends React.Component {
    render() {
        const style = {
            width: '350px',
            height: '200px',
            border: '2px dotted darkgrey',
            textAlign: 'center',
            margin: '0 auto',
            color: 'lightblack'
        };

        return (
            <div style={style}>
                <CardHeader person={this.props.person} />
                <CardJobTitle person={this.props.person}/>
                <CardContact person={this.props.person}/>
            </div>)
    }
}

class CardHeader extends React.Component {
    render( ) {
        return <div><h1>{this.props.person.name} {this.props.person.surname}</h1></div>
    }
}

class CardJobTitle extends React.Component {
    render() {
        return <div><h2>{this.props.person.jobTitle}</h2></div>
    }
}

class CardContact extends React.Component {
    render() {
        return <div>
            <CardEmail person={this.props.person}/>
            <CardPhone person={this.props.person}/>
        </div>
    }
}

class CardEmail extends  React.Component {
    render() {
        return <h3><a href={'mailto:'+this.props.person.email}>{this.props.person.email}</a></h3>
    }
}

class CardPhone extends React.Component {
    render() {
        return <h3><a href={'tel:'+this.props.person.phone}>phonenumber: {this.props.person.phone}</a></h3>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    let info = {
        name: 'Paul',
        surname: 'Adams',
        jobTitle: 'vet',
        email: 'test@example.com',
        phone: '12346698'
    };

    let info2 = {
        name: 'Paulina',
        surname: 'Adamczyk',
        jobTitle: 'painter',
        email: 'test3@example.com',
        phone: '55556698'
    };

    ReactDOM.render(
        <CardGenerator person={info}/>,
        document.getElementById('app')
    );


});