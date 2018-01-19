class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne(props) {
        console.log('handleAddOne click event');
    }

    handleMinusOne(props) {
        console.log('handleMinusOne click event');
    }

    handleReset(props) {
        console.log('handleReset click event');
    }
    render() {
        return (
            <div>
                <h1>Counter: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>=0</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// 1. Create three methods handleAddone ...
// 2. Use console.log to print method name.
// 3. Wire up onClick & bind in the constructor.