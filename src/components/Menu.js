import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import {NavLink} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <BaseLayout>
      <div className="content">
      <div className="menuPage">
        <h2 className="menuTitle">Adobo Joe Food Truck Menu</h2>
        <h4 className="cuisine">Filipino Cuisine</h4>
        <h3 className="menuItem">Pork or Chicken Adobo</h3>
        <p className="menuDesc">Pork/chicken braised in soy sauce, vinegar, garlic, black pepper, and bay leaves served over steamed rice</p>
        <h3 className="menuItem">Bicol Express</h3>
        <p className="menuDesc">Pork loins, sweet peppers, garlic, ginger, black pepper, fish sauce, sautéed in coconut milk and served over steamed rice. ADD some Serrano peppers for an awesome kick!</p>
        <h3 className="menuItem">Adobo Chicken Wings</h3>
        <p className="menuDesc">Naked wings tossed in our original savory adobo sauce, garnished with a side of red cabbage, radish, and sweet pepper. Mild OR Hot</p>
        <h3 className="menuItem">Lumpia Rolls</h3>
        <p className="menuDesc">Hand rolled savory ground beef or pork, shredded cabbage, carrots, onions, garlic in an egg roll wrapper then deep-fried.</p>
        <h3 className="menuItem">Adobo Joe Sandwich</h3>
        <p className="menuDesc">Chicken braised in soy sauce, vinegar, garlic, black pepper, bay leaves, and topped with a homemade vinegar based sweet an tangy slaw on a toasted bun</p>
        <h3 className="menuItem">Pancit Bihon</h3>
        <p className="menuDesc">Rice noodles stir fried in vegetable broth, shredded green cabbage, carrots, sugar peas, celery, garlic, onions, salt and pepper (Vegan option; Chicken or shrimp can be added for an additional charge)</p>
        <h3 className="menuItem">BBQ on a Stick (Filipino Style)</h3>
        <p className="menuDesc">Marinated pork loins, skewered and grilled with sweet and tangy bbq sauce served on a bed of steamed rice</p>
        <br/>
        <br/>
        <h4 className="cuisine">***Menu options may vary based on supply and location***</h4>
      </div>
      </div>
      </BaseLayout>
    );
  }
}
