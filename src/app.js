class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of the computer!';
        const options = ['Thing one', 'Thing two', 'Thing three']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
    handlePick() {
        alert('handle pick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do? </button>
            </div>
        )
    }
}

// passed data in, when it is instanced component called props

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    // Render new p tag for each option (set text, set key)
    handleRemoveAll() {
        console.log(this.props.options);
        alert('Remove All button onClick event');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));