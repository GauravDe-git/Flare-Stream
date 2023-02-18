import React from 'react'
import Button from './Button'

const buttonList = () => {
  return (
    <div className='flex mt-9'>
      <Button name={'All'}/>
      <Button name={'Gaming'}/>
      <Button name={'Music'}/>
      <Button name={'Sports'}/>
      <Button name={'News'}/>
      <Button name={'Cooking'}/>
      <Button name={'Lifestyle'}/>
    </div>
  )
}

export default buttonList