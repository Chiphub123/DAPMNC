// class component 
// function component
import React from "react"
class MyComponent extends React.Component {
    //JSX chỉ trả về 1 phần tử
    render() {
        return (
            <div>
                my first component
                {Math.random()}
            </div>
        );
    }
}
export default MyComponent;