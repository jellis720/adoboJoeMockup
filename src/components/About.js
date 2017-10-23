import React, { Component } from 'react';
import BaseLayout from './BaseLayout';
import truck2 from '../images/truck.jpg';
import ron from '../images/ron2.jpeg';

export default class About extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="aboutPage">
      <div className="mainBio">
        <img src={truck2} className="truck2"/>
        <div className="mainBioContent">
          <h1 className="pageName">Adobo Joe Food Truck</h1>
          <p>Adobo Joe food truck is devoted to the traditional Filipino homestyle cooking. Chicken and pork adobo, lumpia, pancit, and adobo-joe on a pan-de-sal rolls (my version of a sloppy joe) are just to name a few of our food truck specialties. The cuisine you will discover is all time Filipino favorites, which are culturally traditional foods and are always found at Filipino dining tables. Filipino food recipes are rich in flavors and colors because of the diverse cultures that influenced our cuisine such as the Spanish and Chinese. This adds a more exciting complexity and dimension to our flavors, as a result, Filipino cuisine is unique on its own. Because we want our customers to have a true Filipino experience, we use authentic ingredients. Our approach may be unconventional and our dish pairings may seem unusual but the end results produce explosive flavors! You will know it's Filipino cooking because it's flavored with fish sauce, soy sauce, shrimp paste, vinegar, and garlic.
We have a great passion for what we're doing and we feel an even greater responsibility for bringing this food to the triangle area. We really think Filipino food can stand on its own, and we feel there is no better way to make our cuisine more accessible than having a food truck to deliver it. Now we invite you into our world of cooking and discover Filipino food like never before!!! Please visit our <a href="/Contact" className="innerContentTag">contact</a> page for more information.</p>
          </div>
      <hr/>
      <div className="secondaryBio">
        <div className="secondaryBioContent">
          <h3 className="pageName">About Ron</h3>
          <p>After a successful 25 year Army career, with over two years deployed in a combat zone, I've decided to take on a new adventure. I have over 40 years of cooking experience. Being the oldest of seven, I was always helping my parents in the kitchen. I remember as early as six years old cooking rice from a clay pot over a wood-fire stove. Even though sometimes, well most of the time, I burned the bottom of the pot of rice, it would still all be eaten. This is where my passion for cooking began! My family migrated to the United States when I was 14 years old and even then I continued to cook for my family, except this time I was feeding more voracious appetites of seven children. My passion for cooking continued into adult hood and I started experimenting with other cuisines, especially when I was stationed in the east coast, Italy and Hawaii. While Filipino food is my first love, I enjoy cooking all types of cuisines.</p>
        </div>
        <img src={ron} className ="ron"/>
      </div>
      </div>
      </div>
      </BaseLayout>
    );
  }
}
