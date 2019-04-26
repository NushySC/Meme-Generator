import React, { Component } from 'react'
import Form from "./Form"


class MemeGenerator extends Component {
    constructor() {
        super() 
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
    fetch("https://api.imgflip.com/get_memes").then(response => response.json())
    .then(response => {
        const {memes} =response.data
        console.log(memes[2])
        this.setState({allMemeImgs: memes})
    })
}
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg})
    }

    render() {
        return (
            <Form 
            handleChange = {this.handleChange}
            data={this.state}
            handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default MemeGenerator