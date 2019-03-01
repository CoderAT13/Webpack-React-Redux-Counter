import './action'
import React from 'react'
import {connect} from 'react-redux'
import { inc_click, dec_click } from './action';


class Buttons extends React.Component{
    render(){
        return(
            <div className='button_group'>
                <button onClick={this.props.increase}>+</button>
                <button onClick={this.props.decrease}>-</button>
                <p>{this.props.count}</p>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      count: state.count
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      increase: (...args) => dispatch(inc_click()),
      decrease: (...args) => dispatch(dec_click())
    }
  }

const connectButtons = connect(mapStateToProps,mapDispatchToProps)(Buttons);
export {connectButtons as Buttons};
