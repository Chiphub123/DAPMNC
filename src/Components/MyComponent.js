// class component 
// function component
import React from "react"
class MyComponent extends React.Component {
    state = {
        name: "Ngoc Tram",
        age: 20,
        address: "Huong Lo 3"
    };
    //JSX chỉ trả về 1 phần tử
    render() {
        return (
            <div>
                My name is {this.state.name} and i'm from {this.state.address}
            </div>
        );
    }
}
export default MyComponent;