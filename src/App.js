import React from 'react';
import './App.css';

  
  
const App = () => {
let gradientDeg = 1;
  function changeDeg() {
    if (gradientDeg<360) { return (gradientDeg++) }
    else if (gradientDeg == 360) { return (gradientDeg = 1) }
  };
  function changeBodyBackground() {
    changeDeg();
    let elem = document.getElementsByClassName("borderWrapper")
    let colors =("linear-gradient" + "("+ gradientDeg + "deg" + ",blue" + ",red" + ",green"+",gold"+")");
    for (let i = 0; i <elem.length; i++) 
      elem[i].style.background = colors; 
      setTimeout(changeBodyBackground,100); 
     
  };
  changeBodyBackground();
return (
  <div className="borderWrapper" id="bodyBackground">
    <div className="app-wrapper">
      <header className='header'>
        
        <img src="https://all-t-shirts.ru/goods_images/ru126954II000e96164cc766b1c37cb013c9fb2fb31c9.jpg" alt="logo" />
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Message</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>

      </nav>
      <div className='content'>
        <div className="bodyHeader">
          <img src="https://cdn.vox-cdn.com/thumbor/g67BVRfF03xzo-yOTwunt1HtAPg=/0x0:2550x1700/1200x800/filters:focal(1071x646:1479x1054)/cdn.vox-cdn.com/uploads/chorus_image/image/59517127/My_Post__6_.0.jpg" alt="fonImg" />
        </div>
        <div className="contentdescription">
          <div>
            ava + description
          </div>
          <div>My post
            <div>New post</div>

          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
