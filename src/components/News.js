import React, { Component } from 'react'
import { connect } from 'react-redux'

class News extends Component {

    // changeStateInStore = () => {
    //     var { dispatch } = this.props;
    //     dispatch({
    //         type: "change_status"
    //     })
    // }


    render() {
        return (
            <div>
                <p> this is child component</p>
                <button onClick={this.props.changeStateInStore}>click me change state in store</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        num: state.numReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStateInStore: () => {
            dispatch({
                type: "change_status"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)