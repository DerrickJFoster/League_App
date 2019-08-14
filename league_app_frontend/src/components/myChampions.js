import React, { Component } from 'react'

class MyChampions extends Component {
  state = {

  }

   componentDidMount() {
     this.getChampion()
     this.getItem()
   }

   getChampion = () => {
     fetch('http://localhost:3000/champions')
       .then(response => response.json())
       .then(json => this.setState({champions: json}))
       .catch(err => console.log(err))
   }

   getItem = () => {
     fetch('http://localhost:3000/items')
       .then(response => response.json())
       .then(json => this.setState({items: json}))
       .catch(err => console.log(err))
   }


  render() {
    return (
<div className="myChampContainer">
      {this.state.champions ?

        this.state.champions.map((champion, index) => {
          return (
            <div key={champion.id} className='myChampCards'>
              <h3>Name: {champion.name}</h3>
            </div>
           )
        })
      :null
    }

      {this.state.items ?

        this.state.items.map(item => {
        return (
          <div key={item.id} className='myChampCards'>
            <h2>{item.name}</h2>
          </div>
        )
      })
      :null
    }
</div>
    )
  }
}
export default MyChampions;
