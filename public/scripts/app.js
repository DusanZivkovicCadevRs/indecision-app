'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of the computer!';
            var options = ['Thing one', 'Thing two', 'Thing three'];
            return _jsx('div', {}, void 0, _jsx(Header, {
                title: title,
                subtitle: subtitle
            }), _ref, _jsx(Options, {
                options: options
            }), _ref2);
        }
    }]);

    return IndecisionApp;
}(React.Component);

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


var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',

        // render must be defined!!!
        value: function render() {
            return _jsx('div', {}, void 0, _jsx('h1', {}, void 0, this.props.title), _jsx('h2', {}, void 0, this.props.subtitle));
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'handlePick',
        value: function handlePick() {
            alert('handle pick');
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _jsx('button', {
                onClick: this.handlePick
            }, void 0, 'What should I do? '));
        }
    }]);

    return Action;
}(React.Component);

// passed data in, when it is instanced component called props

var _ref = _jsx(Action, {});

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
        return _this4;
    }

    // Render new p tag for each option (set text, set key)


    _createClass(Options, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            console.log(this.props.options);
            alert('Remove All button onClick event');
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, _jsx('button', {
                onClick: this.handleRemoveAll
            }, void 0, 'Remove All'), this.props.options.map(function (option, i) {
                return _jsx(Option, {
                    optionText: option
                }, i);
            }));
        }
    }]);

    return Options;
}(React.Component);

// Option -> Option component here


var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return _jsx('div', {}, void 0, 'Option: ', this.props.optionText);
        }
    }]);

    return Option;
}(React.Component);

// 1. setup the form with text input and submit button
// 2. wire up on submit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

var _ref3 = _jsx('input', {
    type: 'text',
    name: 'option'
});

var _ref4 = _jsx('button', {}, void 0, 'Add Option');

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                alert(option);
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _jsx('form', {
                onSubmit: this.handleAddOption
            }, void 0, _ref3, _ref4);
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

var _ref2 = _jsx(AddOption, {});

ReactDOM.render(_jsx(IndecisionApp, {}), document.getElementById('app'));
