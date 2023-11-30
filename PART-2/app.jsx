
//Part2

const container = document.getElementById("react-container")

//Function Component

const Reactcontainer1 = ()=> {
    return (
        <div>Hello! welcome to React using Function Component
            <div>This is Babel</div>
        </div>
    )
}

ReactDOM.render(<Reactcontainer1/>, container);



//Class Component

class Reactcontainer2 extends React.Component {
  render() {
    return (
        <div>Hello! welcome to React using Class Component
            <div>This is Babel</div>  
        </div>
    )
  }
}

ReactDOM.render(<Reactcontainer2/>, container); 
