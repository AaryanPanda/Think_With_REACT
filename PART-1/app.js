
//Part1
//We would code in Javascript


//React2
//Writing simple React code
const container = document.getElementById("react-container")

const element = React.createElement('div', null, "Hello! Welcome to React")

ReactDOM.render(element, container)



//React3
//Writing Function Component (for easy import and export)
const Reactcontainer1 = () => {
    return React.createElement(`div`, null, `Hey all! Welcome to React Learning`,
        React.createElement(`div`, null, `Lets rock and roll`)
    );
}

ReactDOM.render(Reactcontainer1(), container)



//React4
//Writing Class Component (for easy import and export) (now not in use because of difficultty in handling 'then' keyword)
class Reactcontainer2 extends React.Component {

    // constructor-to initialize the state

    //render method to render the react dom
    render() {
        return React.createElement(`div`, null, `Hey all! Welcome to React Learning`,
            React.createElement(`div`, null, `Lets rock and roll`)
        );
    }
}

ReactDOM.render((new Reactcontainer2).render(), container)