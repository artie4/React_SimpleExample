import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
    this.lastPersonRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
    // this.lastPersonRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
      console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()')
    return nextProps !== this.props.persons || 
    nextProps.changed !== this.props.changed ||
    nextProps.clicked !== this.props.clicked;
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()', nextProps, nextState);
  }

  render() {
    console.log('[Persons.js] Inside render()');
    return (
      this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          position={index}
          forwardRef={this.lastPersonRef}
          changed={(event) => this.props.changed(event, person.id)}
        />
      })
    )
  }
}
export default Persons;