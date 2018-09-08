import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
  //   this.state = { 
  //     persons: [
  //     { id: 'a24f2', name: 'Max', age: 28 },
  //     { id: 'af43ds1', name: 'Manu', age: 29 },
  //     { id: 'af14f4', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate()')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentDidUpdate()', nextProps, nextState);
  }

  state = {
    persons: [
      { id: 'a24f2', name: 'Max', age: 28 },
      { id: 'af43ds1', name: 'Manu', age: 29 },
      { id: 'af14f4', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice method without arguments just copy array
    const persons = [...this.state.persons]; // spread operator create a new array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] }
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          />;
    }
   
    return (

      <div className={classes.App}>
        <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    )
  }
}

export default App;
