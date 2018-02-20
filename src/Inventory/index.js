import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import List from './list';
import FormItem from './formitem'


class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state={
      paper:[],
      kitchen:[],
      cleaning:[],
      misc:[]
    }
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

  render() {
    return (
      <div id="inventory">
        <List addItem={this.props.addItem} subtractItem={this.props.subtractItem} misc={this.state.misc} paper={this.state.paper} kitchen={this.state.kitchen} cleaning={this.state.cleaning} />
        <FormItem handleSubmitItem={this.props.handleSubmitItem}/>
      </div>
    )
  }
}

export default Inventory;
