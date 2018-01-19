class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
            // options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    // In order of child to comunicate with parrent, pass function
    // handleDeleteOptions

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        return alert(randomOption);
    }
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an opiton and alert it

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of the computer!';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

// .bind(obj) workout
// const obj = {
//     name: 'Viki',
//     getName() {
//         return this.name;
//     }
// };

// console.log(obj.getName());

// const getName = obj.getName.bind({name: 'Viki'});
// console.log(getName());

// must be Uppercase, because if lowercase, it will search for html element
class Header extends React.Component {
    // render must be defined!!!
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        )
    }
}

// passed data in, when it is instanced component called props

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option, i) => <Option key={i} optionText={option} />)
                }
            </div>
        );
    }
}

// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

// 1. setup the form with text input and submit button
// 2. wire up on submit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        );
    }
}

// -- State is just an object --
// -- App will aoutorerender with change of the state
// 1. Setup default state object { count: 0 }
// 2. Component rendered with default state values *
// 3. Change state based on event
// 4. Component re-rendered using new state values *
// 5. Start again at 3

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));