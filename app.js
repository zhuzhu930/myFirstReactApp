const title = 'My First React Element'

console.log(title)

const description = "I just learned how to create a React node and render it into the DOM."

const myTitleId = 'main-title';
const name = 'Jessie'


const header = (
    <header>
        <h1 id={myTitleId}>{ name }'s First React Element</h1>
        <p>{ description }</p>
    </header>
);

ReactDOM.render(
    header, 
    document.getElementById('root')
);