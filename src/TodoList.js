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
        if (input === ""){
            alert("Please Enter Deal")
        }else{
        let dealArray = this.state.deal
        dealArray.push(input)
        this.setState({deal: dealArray, inputType: ""})
    }}

    dealDelete(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({deal: listArray})
    }
    crossed(event){
        const li = event.target;
        li.classList.toggle('crossed')
    }
    onForm(e){
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onForm}>
                <div className="container">
                <input className="inputField" type="text" placeholder="What your future achive today?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.inputType}/>
                <button className="addGoal" onClick={() => this.addDeal(this.state.inputType)}>+</button>
                </div>
                <ul>
                    {this.state.deal.map((element, index) => (
                        <li onClick={this.crossed} key={index}>{element}</li>
                    ))}
                </ul>
                <button className="btnDelete" onClick={() => this.dealDelete()}>I GOT IT 🎉</button>
            </form>
            </div>
        )
    }
}