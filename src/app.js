// must be Uppercase
class Header extends React.Component {
    // must be defined
    render() {
        return <p>This is from Header</p>;
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Header />
        <Header />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));