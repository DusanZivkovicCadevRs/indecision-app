'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateles functional component

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

        _this.state = {
            // options: ['Thing one', 'Thing two', 'Thing three']
            options: props.options
        };
        return _this;
    }

    // Lifecycles are reserved to cass React.Component
    // first mount to DOM


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount');
            console.log('fetching data');
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do nothing at all, if err
            }
        }

        // fires up after component update

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('componentDidUpdate');
            if (prevState.options.length !== this.state.options.length) {
                console.log('saving data');
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
            // here we can access this.state & this.props
        }

        // before component goes away

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     };
            // });

            // const num = () => ({}) // this returns an object, so this transforms to:

            this.setState(function () {
                return { options: [] };
            });
        }
        // In order of child to comunicate with parrent, pass function
        // handleDeleteOptions

    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optioniToRemove) {
            // console.log('hdo ' + option);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optioniToRemove;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var randomOption = this.state.options[randomNum];
            return alert(randomOption);
        }
        // handlePick - pass down to Action and setup onClick - bind here
        // randomly pick an opiton and alert it

    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
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

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of the computer!';
            return _jsx('div', {}, void 0, _jsx(Header, {
                subtitle: subtitle
            }), _jsx(Action, {
                hasOptions: this.state.options.length > 0,
                handlePick: this.handlePick
            }), _jsx(Options, {
                options: this.state.options,
                handleDeleteOptions: this.handleDeleteOptions,
                handleDeleteOption: this.handleDeleteOption
            }), _jsx(AddOption, {
                handleAddOption: this.handleAddOption
            }));
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []

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

};var Header = function Header(props) {
    // render must be defined!!!
    return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, props.title), props.subtitle && _jsx('h2', {}, void 0, props.subtitle));
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return _jsx('div', {}, void 0, _jsx('button', {
        onClick: props.handlePick,
        disabled: !props.hasOptions
    }, void 0, 'What should I do?'));
};

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

var _ref = _jsx('p', {}, void 0, 'Please add an option to get started!');

var Options = function Options(props) {
    return _jsx('div', {}, void 0, _jsx('button', {
        disabled: props.options.length == 0,
        onClick: props.handleDeleteOptions
    }, void 0, 'Remove All'), props.options.length === 0 && _ref, props.options.map(function (option, i) {
        return _jsx(Option, {
            optionText: option,
            handleDeleteOption: props.handleDeleteOption
        }, i);
    }));
};

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

var Option = function Option(props) {
    return _jsx('div', {}, void 0, 'Option: ', props.optionText, _jsx('button', {
        onClick: function onClick(e) {
            props.handleDeleteOption(props.optionText);
        }
    }, void 0, 'remove'));
};

// 1. setup the form with text input and submit button
// 2. wire up on submit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

var _ref2 = _jsx('input', {
    type: 'text',
    name: 'option'
});

var _ref3 = _jsx('button', {}, void 0, 'Add Option');

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            // this.setState(() => { return { error }; });

            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, this.state.error && _jsx('p', {}, void 0, this.state.error), _jsx('form', {
                onSubmit: this.handleAddOption
            }, void 0, _ref2, _ref3));
        }
    }]);

    return AddOption;
}(React.Component);

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

ReactDOM.render(_jsx(IndecisionApp, {
    options: ['Option one', 'Option two']
}), document.getElementById('app'));
