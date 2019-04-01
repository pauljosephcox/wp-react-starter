import React, { Component } from 'react';

// Class
class HelloWorld extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>Hello {(this.props.name) ? this.props.name : 'World'}</div>
        );
    }
}
export default HelloWorld;
