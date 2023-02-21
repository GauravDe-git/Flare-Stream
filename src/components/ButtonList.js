import React, {useState} from 'react'
import Button from './Button'

const categories = [
  { name: 'All', categoryId: 0 },
  { name: 'Gaming', categoryId: 20 },
  { name: 'Music', categoryId: 10 },
  { name: 'Sports', categoryId: 17 },
  { name: 'News', categoryId: 25 },
  { name: 'Autos & Vehicles', categoryId: 2 },
  { name: 'Lifestyle', categoryId: 22 },
];

const ButtonList = ({manageCategory}) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    manageCategory(categoryId);
  }


  return (
    <div className='flex mt-9'>
      {categories.map((category) => (
        <Button
          key={category.categoryId}
          name={category.name}
          onClick={() => handleCategoryChange(category.categoryId)}
          isActive={category.categoryId === activeCategory}
        />
      ))}
    </div>
  )
}

export default ButtonList