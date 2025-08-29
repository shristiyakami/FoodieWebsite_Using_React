import React, { useState } from 'react';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';

const Menu = () => {
  const [category, setCategory] = useState('All');

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Menu;
