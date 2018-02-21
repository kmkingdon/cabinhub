import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Moment from 'react-moment';
import moment from 'moment';
import Header from "./Header";
import Register from "./Register";
import Home from "./Home";
import Inventory from "./Inventory";
import './App.css';
import './Reset.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      events:[],
      confirmForm: false,
      allItems: [],
    }
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addItem = this.addItem.bind(this);
    this.subtractItem = this.subtractItem.bind(this);
    this.handleSubmitItem = this.handleSubmitItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  componentDidMount(){
    fetch('https://cabinhubdb.herokuapp.com/events')
      .then(response => response.json())
      .then(response => {

          let eventsArray= response.events;

          eventsArray.map(event => {
            let startDate = event.start;
            startDate= new Date(startDate);
            startDate= new Date(moment(startDate).add('day',1).format("L"));
            event.start = startDate;

            let endDate = event.end;
            endDate= new Date(endDate)
            endDate= new Date(moment(endDate).add('day',2).format("L"));
            event.end = endDate;
          })

        this.setState({events: eventsArray})
      })

    fetch('https://cabinhubdb.herokuapp.com/items')
      .then(response => response.json())
      .then(response => {

        this.setState({allItems: response.events});
      })
  }

  handleSubmitNew(e){
    e.preventDefault();
    let newEvent = new FormData(e.target);

    let eventSubmission= {
      title: newEvent.get('title'),
      start: new Date(newEvent.get('start')),
      end: new Date(newEvent.get('end')),
      allDay: true
    }

    fetch('https://cabinhubdb.herokuapp.com/events', {
          method: "POST",
          body: JSON.stringify(eventSubmission),
          headers: new Headers({ "Content-Type": "application/json" })
        })
        .then(response => response.json())
        .then(response => {
          let oldEvents = this.state.events;

          let newEvent= response.events;

          let startDate = newEvent.start;
          startDate= new Date(startDate)
          startDate= new Date(moment(startDate).add('day',1).format("L"))
          newEvent.start = startDate

          let endDate = newEvent.end;
          endDate= new Date(endDate)
          endDate= new Date(moment(endDate).add('day',2).format("L"))
          newEvent.end = endDate

          oldEvents.push(newEvent);

          this.setState({ events: oldEvents });
        })
        .then(this.setState({ confirmForm: true }))
        .then(
          setTimeout(() => {
            this.setState({ confirmForm: false });
          }, 5000)
        )
        .catch(err => console.log(err));
  }

  handleSubmitEdit(e, id) {
    e.preventDefault();
    let newEvent = new FormData(e.target);
    let eventSubmission= {
      title: newEvent.get('title'),
      start: new Date(newEvent.get('start')),
      end: new Date(newEvent.get('end'))
    }

    let PutAPI= 'https://cabinhubdb.herokuapp.com/events/' + id;

    fetch(PutAPI, {
          method: "PUT",
          body: JSON.stringify(eventSubmission),
          headers: new Headers({ "Content-Type": "application/json" })
        })
        .then(response => response.json())
        .then(response => {
          let oldEvents = this.state.events;
          let indexSplice;
          oldEvents.forEach((event, index) => {
            if(event.id === id){
              indexSplice = index;
            }
          })
          oldEvents.splice(indexSplice, 1, response.events);
          this.setState({ events: oldEvents });
        })
        .then(this.setState({ confirmForm: true }))
        .then(
          setTimeout(() => {
            this.setState({ confirmForm: false });
          }, 5000)
        )
        .catch(err => console.log(err));
  }

  handleDelete(id) {
    let DeleteAPI= 'https://cabinhubdb.herokuapp.com/events/' + id;

    fetch(DeleteAPI , {
      method: "DELETE"
    })
      .then(() => {
        let oldEvents = this.state.events;
        let indexSplice;
        oldEvents.forEach((event, index) => {
          if(event.id === id){
            indexSplice = index;
          }
        })
        oldEvents.splice(indexSplice, 1);
        this.setState({ events: oldEvents });
      })
      .catch(err => console.log(err));
}

  addItem(id) {
    let allItemsArray= this.state.allItems;
    let updatedItem={};
    for (var i = 0; i < allItemsArray.length; i++) {
      if(allItemsArray[i].id === id) {
        let newAmmount = allItemsArray[i].currentAmmount + 1;
        updatedItem.currentAmmount = newAmmount;
      }
    }

    let addAPI = 'https://cabinhubdb.herokuapp.com/items/' + id;
    fetch(addAPI, {
          method: "PUT",
          body: JSON.stringify(updatedItem),
          headers: new Headers({ "Content-Type": "application/json" })
        })
        .then(response => response.json())
        .then(response => {
          let allItemsList = this.state.allItems;
          let indexSplice;
          allItemsList.forEach((item, index) => {
            if(item.id === id){
              indexSplice = index;
            }
          })
          allItemsList.splice(indexSplice, 1, response.items);
          this.setState({ events: allItemsList });
        })
        .catch(err => console.log(err));
  }

  subtractItem(id) {
    let allItemsArray= this.state.allItems;
    let updatedItem={};
    for (var i = 0; i < allItemsArray.length; i++) {
      if(allItemsArray[i].id === id) {
        let newAmmount = allItemsArray[i].currentAmmount - 1;
        updatedItem.currentAmmount = newAmmount;
      }
    }

    let addAPI = 'https://cabinhubdb.herokuapp.com/items/' + id;
    fetch(addAPI, {
          method: "PUT",
          body: JSON.stringify(updatedItem),
          headers: new Headers({ "Content-Type": "application/json" })
        })
        .then(response => response.json())
        .then(response => {
          let allItemsList = this.state.allItems;
          let indexSplice;
          allItemsList.forEach((item, index) => {
            if(item.id === id){
              indexSplice = index;
            }
          })
          allItemsList.splice(indexSplice, 1, response.items);
          this.setState({ events: allItemsList });
        })
        .catch(err => console.log(err));
  }

  handleSubmitItem(e){
    e.preventDefault();
    let newItem = new FormData(e.target);

    let itemSubmission= {
      itemName: newItem.get('itemName'),
      cat: newItem.get('cat'),
      currentAmmount: newItem.get('currentAmmount'),
    }

    fetch('https://cabinhubdb.herokuapp.com/items', {
          method: "POST",
          body: JSON.stringify(itemSubmission),
          headers: new Headers({ "Content-Type": "application/json" })
        })
        .then(response => response.json())
        .then(response => {
          let oldItems = this.state.allItems;
          oldItems.push(response.items);
          this.setState({ events: oldItems });
        })
        .catch(err => console.log(err));
  }

  deleteItem(id) {
    let DeleteAPI= 'https://cabinhubdb.herokuapp.com/items/' + id;
    console.log(id)

    fetch(DeleteAPI , {
      method: "DELETE"
    })
      .then(() => {
        let oldItems = this.state.allItems;
        let indexSplice;
        oldItems.forEach((event, index) => {
          if(event.id === id){
            indexSplice = index;
          }
        })
        oldItems.splice(indexSplice, 1);
        this.setState({ allItems: oldItems });
      })
      .catch(err => console.log(err));
}


  render() {
    return (
      <div className="outside">
        <BrowserRouter>
          <div id="app">
            <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={() => (
                <Register
                  confirmForm={this.state.confirmForm}
                  events={this.state.events}
                  handleSubmitNew={this.handleSubmitNew}
                  handleSubmitEdit={this.handleSubmitEdit}
                  handleDelete= {this.handleDelete}
                />
              )}/>
            <Route path="/inventory" component={() => (
                <Inventory
                  allItems={this.state.allItems}
                  addItem={this.addItem}
                  subtractItem={this.subtractItem}
                  handleSubmitItem={this.handleSubmitItem}
                  deleteItem={this.deleteItem}
                />
              )}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
