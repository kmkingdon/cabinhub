import React, { Component } from 'react';
import List from './list';
import FormItem from './formitem';
import Navigation from '../Navigation';


class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state={
      paper:[],
      kitchen:[],
      cleaning:[],
      misc:[],
      deleteId:0,
      viewDelete: false
    }
    this.selectDelete = this.selectDelete.bind(this);
  }

  componentDidMount(){
    let allItems= this.props.allItems;

    let kitchenArray= [];
    let cleaningArray= [];
    let miscArray= [];
    let paperArray= [];

    if(allItems !== []) {
      for (var i = 0; i < allItems.length; i++) {
        switch (allItems[i].cat) {

          case "Kitchen":
            kitchenArray.push(allItems[i]);
            break;

          case "Cleaning":
            cleaningArray.push(allItems[i]);
            break;

          case "Misc":
            miscArray.push(allItems[i]);
            break;

          case "Paper Products":
            paperArray.push(allItems[i]);
            break;

          default:
            break;
          }
        }
      }

      let sortedKitchen= kitchenArray.sort(function(a, b) {
        if(a.itemName < b.itemName) return -1;
        if(a.itemName > b.itemName) return 1;
        return 0;
      })

      let sortedCleaning= cleaningArray.sort(function(a, b) {
        if(a.itemName < b.itemName) return -1;
        if(a.itemName > b.itemName) return 1;
        return 0;
      })

      let sortedPaper= paperArray.sort(function(a, b) {
        if(a.itemName < b.itemName) return -1;
        if(a.itemName > b.itemName) return 1;
        return 0;
      })

      let sortedMisc= miscArray.sort(function(a, b) {
        if(a.itemName < b.itemName) return -1;
        if(a.itemName > b.itemName) return 1;
        return 0;
      })

      this.setState({kitchen : sortedKitchen});
      this.setState({cleaning : sortedCleaning});
      this.setState({paper : sortedPaper});
      this.setState({misc : sortedMisc});
  }

  selectDelete(id) {

    if(this.state.viewDelete === false) {
      this.setState({viewDelete: true})
      this.setState({deleteId:id})
    } else {
      this.setState({viewDelete: false})
      this.setState({deleteId:0})
    }
  }

  render() {
    return (
      <div id="inventory">
        <Navigation userName={this.props.userName}/>
        <div id="inventory-container">
          <List deleteId={this.state.deleteId} selectDelete={this.selectDelete} addItem={this.props.addItem} subtractItem={this.props.subtractItem} misc={this.state.misc} paper={this.state.paper} kitchen={this.state.kitchen} cleaning={this.state.cleaning} />
          <FormItem deleteId={this.state.deleteId} deleteItem={this.props.deleteItem} viewDelete={this.state.viewDelete}  handleSubmitItem={this.props.handleSubmitItem}/>
        </div>
      </div>
    )
  }
}

export default Inventory;
