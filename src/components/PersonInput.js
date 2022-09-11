import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component{
    state = {
        name:""
    }

    submitHandler = event => {
        event.preventDefault();

        const user = {
            name:this.state.name
        } // thid will be the key load

        axios.post(`https://jsonplaceholder.typicode.com/users`,{user}).then(
            response =>{
                console.log(response)
                console.log(response.data)
            }
        )
    }

    changeHandler = event =>{
        this.setState({name:event.target.value})
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <label>
                    Place holder:
                    <input type="text" name="name" onChange={this.changeHandler}/>
                </label>
                <button>
                    submit
                </button>
            </form>
        )
    }
}