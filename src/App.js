import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';
import moment from 'moment';
import Header from "./Header";
import Register from "./Register";
import Home from "./Home";
import Inventory from "./Inventory";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Contacts from "./Contacts";
import './App.css';
import './Reset.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      events:[],
      allItems: [],
      confirmForm: false,
      authorized: false,
      userId: 0,
      error: '',
      userName: '',
      signup: false,
      warningUsername: false
    }
    this.fetchDatabase= this.fetchDatabase.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.handleSubmitNew = this.handleSubmitNew.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addItem = this.addItem.bind(this);
    this.subtractItem = this.subtractItem.bind(this);
    this.handleSubmitItem = this.handleSubmitItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }


  fetchDatabase(){

    if(this.state.authorized) {

      let token = localStorage.getItem('token');
      let decodedToken= decode(token);
      let id= decodedToken.id

      this.setState({userId : id});
      this.setState({userName: decodedToken.username})

      fetch('https://cabinhubdb.herokuapp.com/events', {
          method:'GET',
          headers: new Headers ({
            Authorization: `Bearer ${token}`
          })
        })
        .then(response => response.json())
        .then(response => {

            let eventsArray= response.events;

            eventsArray.map(event => {
              let startDate = event.start;
              startDate= new Date(startDate);
              startDate= new Date(moment(startDate).add( 1 ,'day').format("L"));
              event.start = startDate;

              let endDate = event.end;
              endDate= new Date(endDate)
              endDate= new Date(moment(endDate).add( 2 ,'day').format("L"));
              event.end = endDate;
            })

          this.setState({events: eventsArray})
        })

        fetch('https://cabinhubdb.herokuapp.com/items',  {
            method:'GET',
            headers: new Headers ({
              Authorization: `Bearer ${token}`
            })
          })
          .then(response => response.json())
          .then(response => {

            this.setState({allItems: response.items});
          })
    }
  }


  login(e) {
    e.preventDefault();

    let login= {
      "email": e.target[0].value,
      "password": e.target[1].value
    }

    fetch('https://cabinhubdb.herokuapp.com/login', {
          method: "POST",
          body: JSON.stringify(login),
          headers: new Headers({ "Content-Type": "application/json" })
        })
        .then(response => response.json())
        .then(response => {
          if(response.error) {
            console.log(response.error)
            this.setState({error:response.error});
          } else{
            this.setState({authorized:true});
            localStorage.setItem('token', response.token)
            this.fetchDatabase();
          }
        })
        .then(setTimeout(() => {
          this.setState({ error: " " });
        }, 5000))
  }

  signup(e) {
    e.preventDefault();

    let userSubmission= {
      email: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
    }

    fetch('https://cabinhubdb.herokuapp.com/signup', {
          method: "POST",
          body: JSON.stringify(userSubmission),
          headers: new Headers({ "Content-Type": "application/json" })
        })
        .then(response => response.json())
        .then(response => {
          if(response.error !== undefined) {
            this.setState({warningUsername: true})
            setTimeout(() => {
                this.setState({ warningUsername: false });
              }, 5000)
          } else {
            this.setState({signup : true})
          }
        })
  }

  logout() {
    localStorage.removeItem('token');
    this.setState({authorized: false})
  }

  handleSubmitNew(e){
    e.preventDefault();

    let eventSubmission= {
      title: e.target[0].value,
      start: new Date(e.target[1].value),
      end: new Date(e.target[2].value),
      allDay: true,
      users_id: this.state.userId
    }

    let token = localStorage.getItem('token');

    fetch('https://cabinhubdb.herokuapp.com/events', {
          method: "POST",
          body: JSON.stringify(eventSubmission),
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
         })
        })
        .then(response => response.json())
        .then(response => {
          let oldEvents = this.state.events;

          let newEvent= response.events;

          let startDate = newEvent.start;
          startDate= new Date(startDate)
          startDate= new Date(moment(startDate).add(1 ,'day').format("L"))
          newEvent.start = startDate

          let endDate = newEvent.end;
          endDate= new Date(endDate)
          endDate= new Date(moment(endDate).add( 2 ,'day').format("L"))
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

    let eventSubmission= {
      title: e.target[0].value,
      start: new Date(e.target[1].value),
      end: new Date(e.target[2].value)
    }

    let PutAPI= 'https://cabinhubdb.herokuapp.com/events/' + id;

    let token = localStorage.getItem('token');

    fetch(PutAPI, {
          method: "PUT",
          body: JSON.stringify(eventSubmission),
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
           })
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
    let token = localStorage.getItem('token');
    let addAPI = 'https://cabinhubdb.herokuapp.com/items/' + id;
    fetch(addAPI, {
          method: "PUT",
          body: JSON.stringify(updatedItem),
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
           })
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
          this.setState({ allItems: allItemsList });
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
    let token = localStorage.getItem('token');
    let addAPI = 'https://cabinhubdb.herokuapp.com/items/' + id;
    fetch(addAPI, {
          method: "PUT",
          body: JSON.stringify(updatedItem),
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
           })
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
          this.setState({ allItems: allItemsList });
        })
        .catch(err => console.log(err));
  }

  handleSubmitItem(e){
    e.preventDefault();

    let itemSubmission= {
      itemName: e.target[0].value,
      cat: e.target[1].value,
      currentAmmount: e.target[2].value,
    }
    let token = localStorage.getItem('token');

    fetch('https://cabinhubdb.herokuapp.com/items', {
          method: "POST",
          body: JSON.stringify(itemSubmission),
          headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
           })
        })
        .then(response => response.json())
        .then(response => {
          let oldItems = this.state.allItems;
          oldItems.push(response.items);
          this.setState({ allItems: oldItems });
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
            <Header authorized={this.state.authorized} logout={this.logout}/>
            <Route exact path="/" component={() => (
              this.state.authorized ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <Home
                  login={this.login}
                  error={this.state.error}
                  />
                )
              )}/>
            <Route exact path="/signup" component={() => (
              this.state.signup ? (
                  <Redirect to="/"/>
                ) : (
                  <Signup
                  signup={this.signup}
                  warningUsername={this.state.warningUsername}
                  />
                )
              )}/>
            <Route exact path="/dashboard" component={() => (
              this.state.authorized ? (
                  <Dashboard
                  authorized={ this.state.authorized}
                  userName = {this.state.userName}
                  />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>
            <Route exact path="/register" component={() => (
              this.state.authorized ? (
                  <Register
                    userId={this.state.userId}
                    confirmForm={this.state.confirmForm}
                    events={this.state.events}
                    handleSubmitNew={this.handleSubmitNew}
                    handleSubmitEdit={this.handleSubmitEdit}
                    handleDelete= {this.handleDelete}
                    userName = {this.state.userName}
                  />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>

            <Route exact path="/inventory" component={() => (
              this.state.authorized ? (
                  <Inventory
                    allItems={this.state.allItems}
                    addItem={this.addItem}
                    subtractItem={this.subtractItem}
                    handleSubmitItem={this.handleSubmitItem}
                    deleteItem={this.deleteItem}
                    userName = {this.state.userName}
                  />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>
            <Route exact path="/contacts" component={() => (
              this.state.authorized ? (
                  <Contacts
                    userName = {this.state.userName}
                  />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
