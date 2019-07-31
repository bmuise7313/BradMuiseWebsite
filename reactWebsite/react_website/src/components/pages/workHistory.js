import React from 'react';
import Sbux from './images/sBux.png'
import Talize from './images/Talize.png'
import vicWest from './images/VicWest.png'

function Workhistory() {
  return (

    <div className="container-fluid">

      <div className="boxed">
      <h1>
        Work History
      </h1>
      </div>
      <div className="boxed">


      <p className="company"> Starbucks Coffee Co: July 2017 - Present</p>
      <p className="title"> Barista </p>
      <div className="companyLogo">
      <img className="companyImage" src={Sbux} alt="Starbucks"/>
      </div>
      <ul className= "reqs">
        <li>
        Ensuring our customers maintain the feeling that they are in their “third place” (away from work and home)
        </li>
        <li>
        Work in high stress situations where team cohesion is a top priority to ensure proper workflow.
        </li>
        <li>
        Prepare premium beverages in a timely manner
        </li>
      </ul>

      <p className="learned"> Starbucks has taught me so many transferrable skills I can take with me in my Career. First and foremost, it taught me how to build strong and lasting relationships with coworkers and customers.<br></br>
      <br></br>Starbucks also reinforced my ability to work in a team in high pressure situations, something I think is invaluable in the programming industry. </p>
      </div>

      <div className="boxed">

      <p className="company"> Talize Inc: Sep 2015 - May 2016</p>
      <p className="title"> Sales Clerk </p>
      <div className="companyLogo">
      <img className="companyImage" src={Talize} alt="Talize"/>
      </div>
      <ul className= "reqs">
        <li>
        Balance Register
        </li>
        <li>
        Maintain cleanly workspace
        </li>
        <li>
        Receive and sort donations into correct department
        </li>
      </ul>

      <p className="learned"> Talize was a short but sweet experience. I gained some relationships with coworkers that still hold up today.<br></br>
      <br></br> Talize is where I really learned the importance and responsibility of money. It was also my first retail experience, so I quickly and effectively learned the POS system and how the retail industry works. </p>
      </div>

      <div className="boxed">

      <p className="company"> VicWest Inc</p>
      <p className="title"> Warehouse Employee </p>
      <div className="companyLogo">
      <img className="vicWestImage" src={vicWest} alt="VicWest"/>
      </div>
      <ul className= "reqs">
        <li>
        Perform daily maintenance on intricate machinery
        </li>
        <li>
        Prepare product in timely and safe manner
        </li>
      </ul>

      <p className="learned">VicWest was my venture into factory work, and there were a lot of lessons learned.<br></br>
      <br></br> VicWest really taught me the value of hard work. Before VicWest, my work ethic was not the same as it is today. I learned that hard work meant not only providing a great product but also a fast product. <br></br>
      It also taught me I should go to school to persue programming because factory work was not for me!</p>
      </div>
    </div>
  );
}

export default Workhistory;
