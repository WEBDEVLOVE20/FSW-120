import React from 'react';
import data from '../data/data.json'
import SuperHero from "../superHero/SuperHero"

class HeroList extends React.Component {
    constructor() {
        super()
        this.state = {
            heros: data
        }
        // this.handleChange = this.handleChange.bind(this)
    }

    // handleChange = (e) => {
    //     if (this.state.name)
    // }
   

    render () {
        const heroList = this.state.heros.map(item => <SuperHero key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div>
            {heroList}
            </div>
        )
    }
}

export default HeroList