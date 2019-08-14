import React, { Component } from 'react'

class MyChampions extends Component {
  state = {

  }

   componentDidMount() {
     this.getChampion()
   }

   getChampion = () => {
     fetch('http://localhost:3000/champions')
       .then(response => response.json())
       .then(json => this.setState({champions: json}))
       .catch(err => console.log(err))
   }


  render() {
    return (
      this.state.champions ?
      <>
        {this.state.champions.map(champion => {
          return (
            <div key={champion.id} className='myChampCards' id='right'>

              <h1>Your Champions</h1>
              <h3>Name: {champion.name}</h3>

            </div>
           )
        })
      }
      </>
      :null
    )
  }
}
export default MyChampions;
