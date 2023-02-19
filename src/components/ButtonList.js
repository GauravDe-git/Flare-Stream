import React, {useState} from 'react'
import Button from './Button'

// const ButtonList = () => {
//   return (
//     <div className='flex mt-9'>
//       <Button name={'All'}/>
//       <Button name={'Gaming'}/>
//       <Button name={'Music'}/>
//       <Button name={'Sports'}/>
//       <Button name={'News'}/>
//       <Button name={'Cooking'}/>
//       <Button name={'Lifestyle'}/>
//     </div>
//   )
// }


const categories = [
  { name: 'All', categoryId: 0 },
  { name: 'Gaming', categoryId: 20 },
  { name: 'Music', categoryId: 10 },
  { name: 'Sports', categoryId: 17 },
  { name: 'News', categoryId: 25 },
  { name: 'Cooking', categoryId: 26 },
  { name: 'Lifestyle', categoryId: 22 },
];

const ButtonList = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    console.log(`Selected category: ${categoryId}`);
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