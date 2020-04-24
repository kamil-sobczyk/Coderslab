import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <ComponentWithDiv/>
}

class ComponentWithDiv extends React.Component {
    render() {
        let divStyle = {
            height:'100px',
            backgroundColor: 'green'
        };
        return <div style={divStyle} onClick={this.handleOnClick}  onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}></div>
    }
    handleOnClick() {
        console.log('klik');
    }
    handleOnMouseEnter () {
        console.log('najechanie');
    }
    handleOnMouseLeave() {
        console.log('opuszczenie')
    }


}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});

//jeszcze krócej
// import React from 'react';
// import ReactDOM from 'react-dom';
// ​
// class App extends React.Component{
//     render(){
//         return <div style={{height: "200px", width:"200px", backgroundColor: "yellow"}} onClick={() => console.log("click")} onMouseEnter={() => console.log("MouseEnter")} onMouseLeave={() => console.log("MouseLeave")}>
//         </div>
//     }
// }
// ​
// document.addEventListener('DOMContentLoaded', function(){
//     ReactDOM.render(
//         <App/>,
//         document.getElementById('app')
//     );
// });