// Write your code here
import { Component } from 'react'
import './index.css'

class ShowHide extends Component {
    state = { firstName: false, lastName: false }

    onFirstName = () => {
        this.setState(prevState => {
            if (prevState.firstName) {
                return { firstName: false }
            }
            return { firstName: true }
        })
    }

    onLastName = () => {
        this.setState(prevState => {
            if (prevState.lastName) {
                return { lastName: false }
            }
            return { lastName: true }
        })
    }

    render() {
        const { firstName, lastName } = this.state

        return (
            <div className="bg-container">
                <h1 className="heading">Show/Hide</h1>
                <div className="container">
                    <div className="name-container">
                        <button onClick={this.onFirstName} type="button" className="button">
                            Show/Hide Firstname
            </button>
                        {firstName ? (
                            <div className="first-name-container">
                                {' '}
                                <h1 className="first-name">Joe</h1>
                            </div>
                        ) : null}
                    </div>

                    <div className="name-container">
                        <button onClick={this.onLastName} type="button" className="button">
                            Show/Hide Lastname
            </button>
                        {lastName ? (
                            <div className="first-name-container">
                                <h1 className="first-name">Jonas</h1>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowHide
