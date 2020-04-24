import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    function AddNumbers(props){
        const sum = props.numberA + props.numberB;
        return <div>
            {sum}
        </div>
    }

    function App(props){
        return <div>
            <AddNumbers numberA={2} numberB={3} />
        </div>;
    }

    class App1 extends React.Component{
        render() {
            return <div>
                <AddNumbers1 numberA={2} numberB={3}/>
            </div>
        }
    }

    class AddNumbers1 extends React.Component {
        render() {
            const sum1 = this.props.numberA + this.props.numberB;
            return <div>
                {sum1}
            </div>
        }
    }

    ReactDOM.render(
        <div>
            <App/>,
            <App1/>
        </div>,
        document.getElementById('app')
    );
});
