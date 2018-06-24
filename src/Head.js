import React , { Component } from 'react';

/*
class Button extends Component {
    render = () => {
        return (
            <button className="btn" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

class Head extends Component {
    render() {
        return (
            <div className="head">
               {this.props.value}
            </div>
        );
    }
}

class Calculator extends Component {


     NUMBERS = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '10'];
     OPERATIONS = ['+' , '-' , '/' , '*' , '%'];
     RESULT = ['='];

    constructor (props){
        super(props);
        this.state = {
            firstOperand: "0",
            secondOperand: "0",
            currentAnswer: "0",
            displayValue: "0",
            defaultOperator: "+",
        };
    }

    isNumber = (i) => {
        for (let j = 0; j < this.NUMBERS.length; ++j) {
            if (i === this.NUMBERS[j]) {
                return true;
            }
        }
        return false;
    }

    isOperation = (i) => {
        for (let j = 0; j < this.OPERATIONS.length; ++j) {
            if (i === this.OPERATIONS[j]) {
                return true;
            }
            return false;
        }
    }

    isResult = (i) => {
        if (i === '=') {
            return true;
        }
        return false;
    }

    keyPress = (i) => {
        //let currentOperator = this.state.defaultOperator;
        console.log("Here");
        var current = this.state.currentAnswer;
        var first = this.state.firstOperand;
        if (this.isNumber(i)) {
            console.log(first);
            first.concat(i);
            console.log(first);
            this.setState(
                {
                    firstOperand: first,
                }
            );
        } else
        if (this.isOperation(i)) {
            //currentOperator = i;
            if (i === '+') {
                current = (parseFloat(this.state.currentAnswer) + parseFloat(this.state.firstOperand)).toString(10);
                console.log(current);
                this.setState(
                    {
                        currentAnswer: current,
                    }
                );
            }
            console.log(this.state.currentAnswer);
            console.log(this.state.firstOperand);
        }
    }

    renderButton = (i) => {
        return (
            <Button value={i} onClick={() => this.keyPress.bind(this , i)}/>
        );
    }

    render() {
        return (
            <div>
                <Head />
                <br/>
                <div className="keypad-row">
                    {this.renderButton('0')}
                    {this.renderButton('1')}
                    {this.renderButton('2')}
                    {this.renderButton('3')}
                    {this.renderButton('4')}
                    {this.renderButton('5')}
                    {this.renderButton('6')}
                    {this.renderButton('7')}
                    {this.renderButton('8')}
                    {this.renderButton('9')}
                    {this.renderButton('=')}
                    {this.renderButton('+')}
                    {this.renderButton('-')}
                    {this.renderButton('*')}
                    {this.renderButton('/')}
                </div>
            </div>
        );
    }

}

*/
/*
class Button extends Component {
    render() {
        return (
            <button onClick={() => this.props.onClick()}>{this.props.value}</button>
        );
    }
}

class Head extends Component {
    constructor() {
        super(props);
        this.state = {
            currentValue = this.props.current
        }
    }
    render() {
        return (
            <head>
                {this.props.currentAnswer}
            </head>
        );
    }
}

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAnswer: "0",
            currentOperand: "0",
            currentOperator: "",
            defaultOperator: "+",
        };
    }

    renderButton = (id) => {
        return  (
            <Button value={id} />
        );
    }

    render() {
        return (
            <div>
                <Head answer={this.state.currentAnswer} operand={this.state.currentOperand}/>
                <Display value={this.state.firstOperand} />
                <br/>
                <div className="keypad-row">
                    {this.renderButton('0')}
                    {this.renderButton('1')}
                    {this.renderButton('2')}
                    {this.renderButton('3')}
                    {this.renderButton('4')}
                    {this.renderButton('5')}
                    {this.renderButton('6')}
                    {this.renderButton('7')}
                    {this.renderButton('8')}
                    {this.renderButton('9')}
                    {this.renderButton('=')}
                    {this.renderButton('+')}
                    {this.renderButton('-')}
                    {this.renderButton('*')}
                    {this.renderButton('/')}
                </div>
            </div>
        );
    }
}

*/

class Button extends Component {
    render = () => {
        return (
            <button onClick={this.props.onClick}>{this.props.value}</button>
        );
    }
}

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "0",
            currentAnswer: "0",
            defaultOperation: "+",
            currentOperation: "",
            isEqualSet: false,
        };
    }

    renderButton = (i) => {
        return (
            <Button value={i} onClick={this.handleClick.bind(this , i)} />
        );
    }

    isNumber = (i) => {
        let NUMBERS = ['1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0'];
        for (let j = 0; j < NUMBERS.length; ++j) {
            if (NUMBERS[j] === i) {
                return true;
            }
        }
        return false;
    }

    isOperator = (i) => {
        let OPERATORS = ['+' , '-' , '/' , '*' ];
        for (let j = 0; j < OPERATORS.length; ++j) {
            if (OPERATORS[j] === i) {
                return true;
            }
        }
        return false;
    }

    handleClick = (i) => {  
        //console.log(i);
        if (this.isNumber(i)) {
            this.setState({
                first: this.state.first.concat(i),
            });
        } else
        if (this.isOperator(i)) {
            if (i === '+') {
                this.setState({
                    currentOperation: i,
                    currentAnswer: (parseFloat(this.state.currentAnswer) + parseFloat(this.state.first)).toString(),
                    first: "0",
                });
                console.log(this.state.currentOperation);
            } else
            if (i === '-') {
                this.setState(
                    {
                        currentOperation: i,
                        currentAnswer: (parseFloat(this.state.currentAnswer) + parseFloat(this.state.first)).toString(),
                        first: "0",
                    }
                );
            } else
            if (i === '*') {
                this.setState(
                    {
                        currentOperation: i,
                    }
                );
            } else
            if (i === '/') {
                this.setState(
                    {
                        currentOperation: i,
                    }
                );
            }
            else
            if (i === 'C') {
                this.setState({currentOperation: ''});
            }
        } else
        if (i === '=') {
            if (this.state.currentOperation === '+') {
                console.log("Add");
                console.log ((parseFloat(this.state.currentAnswer) + parseFloat(this.state.first)).toString());
                this.setState(
                    {
                        first: "0",
                        currentAnswer:  (parseFloat(this.state.currentAnswer) + parseFloat(this.state.first)).toString(),
                        currentOperation: "",
                        isEqualSet: true,
                    }
                );
            } else
            if (this.state.currentOperation === '-') {
                console.log("Subtraction");
                console.log((parseFloat(this.state.currentAnswer) - parseFloat(this.state.first)).toString());
                this.setState(
                    {
                        first: "0",
                        currentAnswer: (parseFloat(this.state.currentAnswer) - parseFloat(this.state.first)).toString(),
                        currentOperation: "",
                        isEqualSet: true,
                    }
                );
            }
        }
        //console.log(this.state.first);
        //console.log(this.state.currentAnswer);
    }

    add = () => {
        let answer = this.state.currentAnswer;
        let firstOperand = this.state.first;
        let solution = (parseFloat(answer) + parseFloat(firstOperand)).toString();
        this.setState({
            currentAnswer: solution,
            first: solution,
            currentOperation: "",
            isEqualSet: false,
        });
    }


    render = () => {
        return (
            <div className="head">
              {/*this.state.isEqualSet ? this.state.currentAnswer : (this.state.currentOperation === '' ? this.state.first : this.state.currentAnswer)*/}
              Current Answer: {this.state.currentAnswer}
                <br />
              First Operand: {this.state.first}
              <br/>
              {this.state.currentOperation === '' ? this.state.first : this.state.currentAnswer}
                <br />
                <br />
                <div className="keypad-row">
                        {this.renderButton('0')}
                        {this.renderButton('1')}
                        {this.renderButton('2')}
                        {this.renderButton('3')}
                        {this.renderButton('4')}
                        {this.renderButton('5')}
                        {this.renderButton('6')}
                        {this.renderButton('7')}
                        {this.renderButton('8')}
                        {this.renderButton('9')}
                        {this.renderButton('=')}
                        {this.renderButton('+')}
                        {this.renderButton('-')}
                        {this.renderButton('*')}
                        {this.renderButton('/')}
                        {this.renderButton('C')}
                    </div>
            </div>
        );
    }
}


export default Head;

