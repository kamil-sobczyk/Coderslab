import React from 'react';
import ReactDOM from 'react-dom';
import shopping from './zadanie02';

class App extends React.Component {
    render() {
        return <Receipt myItemsTwo={this.props.myItems}/>;
    }
}

class Receipt extends React.Component {
    render(){
        return (
            <table>
                <ReceiptHeader/>
                <ReceiptItems myItemsThree={this.props.myItemsTwo} />
                <ReceiptFooter myItemsThree={this.props.myItemsTwo}/>
            </table>
        )
    }
}

class ReceiptHeader extends React.Component {
    render() {
        return <thead>
        <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Ilość</th>
            <th>Łączna cena</th>
        </tr>
        </thead>
    }
}

class ReceiptItems extends React.Component {
    render() {
        return (
            <tbody>
            {this.props.myItemsThree.map(e=> <ReceiptItem product={e}/>)}
            </tbody>
        )
    }
}

class ReceiptItem extends  React.Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.product.name}
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    {this.props.product.count}
                </td>
                <td>
                    {this.props.product.price * this.props.product.count}
                </td>
            </tr>
        )
    }
}

class ReceiptFooter extends React.Component {
    render() {
        let sum = this.props.myItemsThree.reduce((prev, curr)=>prev+curr.count*curr.price,0);
        return (
            <tfoot>
            <tr>
                <td>SUMA</td>
                <td></td>
                <td></td>
                <td>
                    {sum}
                </td>
            </tr>
            </tfoot>
        )
    }
}



document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App myItems={shopping}/>,
        document.getElementById('app')
    );
});