import React, { Component as ReactComponent } from 'react'
import './App.css'
import NewsPost from'./NewsPost'

class App extends ReactComponent {
    state = {
        value: '',
        newsPosts: []
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onClick = () => {
        const {value, newsPosts} = this.state
        this.setState({
            value: '',
            newsPosts: [
                ...newsPosts,
                {
                    id: Date.now().valueOf(),
                    value
                }
            ]
        })
    }

    render() {
        const {value, newsPosts} = this.state

        return (
            <div className="App">
                <input className="todo-input" onChange={this.onChange} placeholder="Какие новости?" value={value} />
                <button onClick={this.onClick}>Создать новость</button>
                <div className="todo-container">
                    {newsPosts.map((item, i)=>(
                        <NewsPost key={item.id} value={item.value} />
                    ))}
                </div>
            </div>
        )
    }
}

export default App