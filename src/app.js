// stateles functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            // options: ['Thing one', 'Thing two', 'Thing three']
            options: props.options
        };
    }

    // Lifecycles are reserved to cass React.Component
    // first mount to DOM
    componentDidMount() {
        console.log('componentDidMount');
        console.log('fetching data');
    }

    // fires up after component update
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('saving data');
        // here we can access this.state & this.props
    }

    // before component goes away
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        // const num = () => ({}) // this returns an object, so this transforms to:

        this.setState(() => ({ options: [] }));

    }
    // In order of child to comunicate with parrent, pass function
    // handleDeleteOptions

    handleDeleteOption(optioniToRemove) {
        // console.log('hdo ' + option);
        this.setState(prevState => ({
            options: prevState.options.filter(option => option !== optioniToRemove)
        }));
    }


    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        return alert(randomOption);
    }
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an opiton and alert it

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        // // console.log(option);
        // this.setState((prevState) => {
        //     // DO NOT MANIPULATE STATE IN SET STATE
        //     // return ( {options: prevState.options.push(option) } )
        //     // COMPUTE INSTEAD
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // });

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    render() {
        const subtitle = 'Put your life in the hands of the computer!';
        return (
            <div>
                <Header
                    subtitle={subtitle}
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
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
// class Header extends React.Component {
//     // render must be defined!!!
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {
    // render must be defined!!!
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
                </button>
        </div>
    )
}


// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }

// passed data in, when it is instanced component called props
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option, i) => <Option key={i} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button disabled={props.options.length == 0} onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option, i) => (
                    <Option
                        key={i}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}


// Option -> Option component here
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>
                remove
            </button>
        </div>
    );
}

// 1. setup the form with text input and submit button
// 2. wire up on submit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        e.target.elements.option.value = '';

        // this.setState(() => { return { error }; });

        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
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

// functional stateles component
// faster than class Component 
// const User = (props) => {
//     return (
//         <div>
//             <p>Name:{props.name}</p>
//             <p>Age:{props.age}</p>
//         </div>
//     );
// };

// ReactDOM.render(<User name="Dule" age={30} />, document.getElementById('app'));

ReactDOM.render(<IndecisionApp options={['Option one', 'Option two']} />, document.getElementById('app'));
