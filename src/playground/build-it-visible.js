const requiredDiv = document.getElementById('app');

let visible = false;

const toggle = () => {
    visible = !visible;
    rerenderTemplate();
}

const rerenderTemplate = () => {
    const template = (
        <div>
            <h1>Visibily Toggle</h1>
            <button onClick={toggle}>{!visible ? 'Show text' : 'Hide text'}</button>
            {visible && (<div><p>Text Toggle</p></div>)}
        </div>
    );

    ReactDOM.render(template, requiredDiv);
}

rerenderTemplate();