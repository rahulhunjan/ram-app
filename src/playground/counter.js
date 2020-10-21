// const app = {
//    title: 'This is subtitle',
//    subtitle: 'Subheading here'

// };

// function userMainlocation(location){
// if(location){
// return location;
// } else{
//     return 'unknown';
// }
// };

// const template = (
// <div>
// <h2>{app.title}</h2>
// <p>{app.subtitle}</p>
// <p>{userMainlocation(app.location)}</p>
// <ol>
// <li>Item one</li>
// <li>Item Two</li>
// </ol>
// </div>
// );
let count = 0;
    const addOne = () =>{
        count++;    
        renderCount();
    };

    const minusOne = () =>{
        count--;
        renderCount();
    console.log('minus');
    };

    const resetOne = () =>{
        count = 0;
        renderCount();   
        console.log('reset');
        };

const appRoot = document.getElementById('app');

const renderCount = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetOne}>Reset</button>
        <h5>Hello</h5>
        </div>
        
    );
    ReactDOM.render(templateTwo,appRoot);
};

renderCount();