import React, {useState} from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../utils/categorySlice';


const ButtonList = () => {
  const dispatch = useDispatch();
  const {categories, selectedCategoryID} = useSelector((state) => state.categories);

  const handleCategoryChange = (categoryId) => {
    dispatch(selectCategory(categoryId));
  }


  return (
    <div className='flex mt-9'>
      {categories.map((category) => (
        <Button
          key={category.categoryId}
          name={category.name}
          onClick={() => handleCategoryChange(category.categoryId)}
          isActive={category.categoryId === selectedCategoryID}
        />
      ))}
    </div>
  )
}

export default ButtonList