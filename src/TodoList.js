import { Component } from "react";

export class TodoList extends Component{
    constructor(){
        super();

        this.state = {
            inputType: "",
            deal: []
        }
    }

    onChangeEvent(e){
        this.setState({inputType: e})
    }

    addDeal = (input) => {
        let dealArray = this.state.deal
        dealArray.push(input)
        this.setState({deal: dealArray, inputType: ""})
    }


    render() {
        return(
            <div>
                <div className="container">
                <input className="inputField" type="text" placeholder="What your future achive today?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.inputType}/>
                <button className="addGoal" onClick={() => this.addDeal(this.state.inputType)}>+</button>
                </div>
                <ul>
                    {this.state.deal.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
                <button className="btnDelete" onClick={() => this.dealDelete}>I GOT IT 🎉</button>
            </div>
        )
    }
}