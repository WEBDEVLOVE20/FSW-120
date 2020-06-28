import React from 'react'

class NameForm extends React.Component {
    constructor() {
        super()
        this.state = {
            names: []
        }
    }


    handleChange = () => {
        
    }





    // const whateverMap = this.state.heros.map(item => {
    //     return (
    //       <SuperHero
    //         key={item.id}
    //         item={item}
    //         handleClick= {() => { return (alert(item.catchPhrase))}}
    //         />
    //     )
    //   })

    render() {
        return (
            <div>
                <input
                    type='text'
                    name='names'
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}



export default NameForm