//przykłady z prezentacji

import React from 'react';
import ReactDOM from 'react-dom';


// class App extends React.Component {
//     handleClickBox = (paramFromChild) => { //komponent dziecka przekazuje rodzicowi parametr poprzez metodę, którą przekazał do niego rodzic.
//         console.log("Metoda w App", paramFromChild);
//     };
//     render() {
//         return <Box clickMethod={this.handleClickBox} />; //komponent dziecka (Box) wywołuje metodę, która została do niego przekazana z rodzica (App) jako własność props.
//     }
// }
//
// class Box extends React.Component{
//     handleStartClick = () => {
//         if ( typeof this.props.clickMethod === 'function' ){
//             this.props.clickMethod("z Box");
//         }
//     };
//     render(){
//         return  <span onClick={this.handleStartClick}> Click </span>;
//     }
// }
//
// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });

class ToDoItem extends React.Component{
    handleDoneClick = () => {
        //Pamiętaj o sprawdzeniu czy
        //atrybut istnieje i można go wywołać!
        if ( typeof this.props.onDone === 'function' ){
            this.props.onDone(this.props.title);
        }
    }
    render(){
        return <li><span>{this.props.title}</span>
            <button
                onClick={this.handleDoneClick}
            >Zakończ</button></li>;
    }
}

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    handleItemDone = (title) => {
        const newItems = this.state.items.filter(item => {
            return item !== title;
        });
        this.setState({
            items: newItems
        });
    };
    render(){
        const items = this.state.items.map(item => {
            return <ToDoItem
                title={item}
                onDone={this.handleItemDone}
            />
        });
        return <ul>
            {items}
        </ul>;
    }
}

const items = ['Kupić bułki','Ugotować rosół',
    'Zrobić prezentację ze zdarzeń'];

ReactDOM.render(
    <ToDoList items={items} />,
    document.getElementById('app')
);