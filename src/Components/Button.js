import { render } from '@testing-library/react'
import React,{Component} from 'react'
import "../calc.css"
class Buttons extends Component {
    // handling clicks over there
    handleclicks = (event) => {
      this.props.Buttonclicked(event.target.value);
    };    
render(){
  return (
    <div className='buttons-menu'>
        {/*ROW 1 BUTTONS */}
        <button className='button btn-action'
        onClick={this.handleclicks}
        value = "c"
        >
            C
        </button>
        <button className='button btn-action'
        onClick={this.handleclicks}
        value = "+/-"
        >
            +/-
        </button>
        <button className='button btn-action'
        onClick={this.handleclicks}
        value = "%"
        >
            %
        </button>
        {/*ROW 2 BUTTONS */}
        <div className='row2'>
            <button className='button' 
            onClick={this.handleclicks} 
            value = "7"
            >
                7
            </button>
            <button className='button' 
            onClick={this.handleclicks} 
            value = "8"
            >
                8
            </button>
            <button className='button' 
            onClick={this.handleclicks} 
            value = "9"
            >
                9
            </button>
            <button className='button btn-calc' 
            onClick={this.handleclicks} 
            value = "*"
            >
                *
            </button>
        </div>
         {/*  ROW 3 BUTTONS */}
         <div className='row3'>
         <button className='button' 
            onClick={this.handleclicks} 
            value = "4"
            >
                4
            </button>
            <button className='button' 
            onClick={this.handleclicks} 
            value = "5"
            >
                5
            </button>
            <button className='button' 
            onClick={this.handleclicks} 
            value = "6"
            >
                6
            </button>
            <button className='button btn-calc' 
            onClick={this.handleclicks} 
            value = "-"
            >
                -
            </button>
         </div>
         {/* ROW 4 BUTTONS */}
         <div className='row4'>
         <button className='button' 
            onClick={this.handleclicks} 
            value = "1"
            >
                1
            </button>
            <button className='button' 
            onClick={this.handleclicks} 
            value = "2"
            >
                2
            </button>
            <button className='button' 
            onClick={this.handleclicks} 
            value = "3"
            >
                3
            </button>
            <button className='button btn-calc' 
            onClick={this.handleclicks} 
            value = "+"
            >
                +
            </button>
         </div>
          {/* ROW 5 BUTTONS*/}
        <div className="row5">
          <button className=" btn-0" onClick={this.handleclicks} value="0">
            0
          </button>
          <button className="button" onClick={this.handleclicks} value=".">
            .
          </button>
          <button
            className="button btn-calc"
            onClick={this.handleclicks}
            value="="
          >
            =
          </button>
        </div>
    </div>
  );
  }
} 


export default Buttons;