import React, { Component } from 'react';
import List from './list';
import FormItem from './formitem';
import Navigation from '../Navigation';
import ListNav from './listnav';



class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state={
      deleteId:0,
      deleteCat:"",
      viewDelete: false,
    }
    this.selectDelete = this.selectDelete.bind(this);
  }


  selectDelete(id, cat) {

    if(this.state.viewDelete === false) {
      this.setState({viewDelete: true})
      this.setState({deleteId:id})
      this.setState({deleteCat:cat})
    } else {
      this.setState({viewDelete: false})
      this.setState({deleteId:0})
      this.setState({deleteCat:""})
    }
  }

  render() {
    return (
      <div id="inventory">
        <Navigation userName={this.props.userName}/>
        <div id="inventory-container">
          <ListNav mobileViewSet={this.props.mobileViewSet}/>
          <List mobileView={this.props.mobileView} deleteId={this.state.deleteId} selectDelete={this.selectDelete} addItem={this.props.addItem} subtractItem={this.props.subtractItem} misc={this.props.misc} paper={this.props.paper} kitchen={this.props.kitchen} cleaning={this.props.cleaning} />
          <FormItem mobileView={this.props.mobileView} deleteCat={this.state.deleteCat} deleteId={this.state.deleteId} deleteItem={this.props.deleteItem} viewDelete={this.state.viewDelete}  handleSubmitItem={this.props.handleSubmitItem}/>
        </div>
      </div>
    )
  }
}

export default Inventory;
