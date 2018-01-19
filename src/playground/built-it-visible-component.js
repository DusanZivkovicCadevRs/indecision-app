// VisibilityToggle - render, consturctor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)

        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleVisibilityToggle() {
        this.setState(oldState => {
            return {
                visibility: !oldState.visibility
            }
        });
    }

    render() {
        return (
            <div>
            <h1>VisibilityToggle</h1>
            <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide Text' : 'Show Text'}</button>
            {this.state.visibility && <div><p>This is text to be toggled with</p></div>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
