let count = 0;

const addOne = () => {
    count++;
    console.log(count);
    renderCounterApp();
}

// challengde
// make button '-1' setup minusOne fn and reg + log
// Make reset button 'reset' - setup reset function - log 'reset'

const minusOne = () => {
    count--;
    console.log(count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log(count)
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    console.log('render initiated', count)
    const template = (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={reset} >Reset!</button>
        </div>
    );

    ReactDOM.render(template, appRoot);

}

renderCounterApp()