import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'


const Calculate = () => {
  
    const [currentSum,setCurrentSum]=useState(0);
    const Add=(e)=>{
        e.preventDefault();
            let number1 = document.querySelector('#num1').value
            let number2 = document.querySelector('#num2').value

            let result = Number(number1) + Number(number2)
            console.log(result)
            setCurrentSum(result)

        }

    const multiply=(e)=>{
        e.preventDefault();
        let number1 = document.querySelector('#num1').value
        let number2 = document.querySelector('#num2').value
        
        let result = number1 * number2
        console.log(result)
          
      }
    
      const subtract=(e)=>{
        e.preventDefault();
        let number1 = document.querySelector('#num1').value
        let number2 = document.querySelector('#num2').value
        
        let result = number1 - number2
        console.log(result)
          
      }
    
      const divide=(e)=>{
        e.preventDefault();
        let number1 = document.querySelector('#num1').value
        let number2 = document.querySelector('#num2').value
        
        let result = number1 / number2
        console.log(result)
          
      }

    return (
        <>
        <Container >
        <h2 className="center-text">React-Calculator</h2>
        </Container>
        <form>
        <button onClick={Add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
            <button>Clear</button>
            <input type="text" id="num1" placeholder="enter a number" />
            <input type="text" id="num2" placeholder="enter a number" />
            <input type="text" id="result" readOnly />   
            
      </form>
       
        </>
    )
}

export default Calculate