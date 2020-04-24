
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render(){
        return <Address name='jan' lastname='nowak' street='prosta' housenumber='12' postcode='45-345' city='sosnowiec'/>
    }
}

class Address extends React.Component{
    render(){
        if ((this.props.name.length && this.props.lastname.length && this.props.street.length && this.props.housenumber.length && this.props.city.length) > 0 && (this.props.postcode.length === 5 || this.props.postcode.length === 6) )
            return <div>
                <h1>{this.props.name} {this.props.lastname}</h1>
                <p>{this.props.street} {this.props.housenumber}</p>
                <p>{this.props.postcode} {this.props.city}</p>
            </div>
        else return null;
    }
}

//Nie zmieniaj tego kodu poniżej!
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});

export {Address}