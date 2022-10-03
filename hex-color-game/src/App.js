import React, { useState, useEffect } from 'react';
import { Container, ColoredBox, ButtonsContainer, ButtonsStyled } from './styles'

function App() {
  const [array, setArray] = useState([])
  const [colorSelected, setColorSelected] = useState(0)
  const [isWrong, setIsWrong] = useState()

  let color1 = '#'
  let color2 = '#'
  let color3 = '#'
  let varColorArray = []

  const getRandomColor = () => {
    let letters = '0123456789ABCDEF'.split('');
    for (let i = 0; i < 6; i++) {
      color1 += letters[Math.round(Math.random() * 15)]
      color2 += letters[Math.round(Math.random() * 15)]
      color3 += letters[Math.round(Math.random() * 15)]
    }
    varColorArray.push(color1, color2, color3)
    setArray(varColorArray)
  }

  const getChosenColor = () => {
    const bla = (Math.round((Math.random() * 2)))
    setColorSelected(bla)
  }

  const handleClick = (e) => {
    if (e.target.value === array[colorSelected]){
      setIsWrong(false)
      getRandomColor()
    } else {
      setIsWrong(true)
    }
  }

  useEffect(() => {
    getRandomColor()
  }, [])

  useEffect(() => {
    getChosenColor()
  }, [varColorArray])

  return (
    <Container>
      <ColoredBox colorProps={array[colorSelected]} />
      <ButtonsContainer>
        <ButtonsStyled value={array[0]} onClick={handleClick}>{array[0]}</ButtonsStyled>
        <ButtonsStyled value={array[1]} onClick={handleClick}>{array[1]}</ButtonsStyled>
        <ButtonsStyled value={array[2]} onClick={handleClick}>{array[2]}</ButtonsStyled>
      </ButtonsContainer>
      <h1>{isWrong && 'Errado!'}</h1>
    </Container>
  );
}

export default App;
