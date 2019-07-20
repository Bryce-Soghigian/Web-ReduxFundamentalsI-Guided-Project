import React,{useState,useEffect,useContext,useReducer} from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


import React from 'react'

export default function Person() {
  const [mentalHealth, setMentalHealth] = useState(100);
  const [physicalHealth, setPhysicalHealth] = useState(100);
  return (
    <div>
              <div>physical health: {this.state.physicalHealth}</div>
        <div>mental health: {this.state.mentalHealth}</div>

        <button>Slip on banana peel</button>
        <button>Watch the news</button>
        <button>Win the Lottery</button>
    </div>
  )
}

