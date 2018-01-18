console.log('App.js is running!');

const appRoot = document.getElementById('app');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// create 'removeAll' button
// on click - wipe the arary + rerender

const onFormSubmit = (e) => {
    e.preventDefault();

    // the element that started event @e.target
    const option = e.target.elements.option.value;
    console.log()

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderTemplate();
}

const removeAll = () => {
    app.options = [];
    renderTemplate();
}

const numbers = [55, 101, 1000];

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option, i) => <li key={i}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}

renderTemplate();
