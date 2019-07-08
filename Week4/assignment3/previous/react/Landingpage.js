import React, { Component } from 'react';
import './Landingpage_v2.css';
class App extends Component {
    render(){
        return {
            <div class="wrap">
		
        <div class="container">
                
                <div class="nav">
                    <a href="#" class="logo"><img class="header_logo" src="image/dm_Logo.png"></a>
                    <label for="toggle">&#9776</label>
                    <input type="checkbox" id="toggle"/>
                    <div class="menu">
                            <a href="#">Shop</a>
                            <a href="#">Collections</a>
                            <a href="#">Concerns</a>
                            <a href="#">Best-Sellers</a>
                            <a href="#">About</a>
                    </div>
                </div>
        </div>
        <div class="header">
            <h1 id="myHeading" onclick="myFunction()"> Welcome Message </h1>
        </div>
        
        
        
        <div class="container2">
        <div class="new">	
			
                <div class="col">
                    <img class="colPic" src="image/Aqua.jpg">
                    <h2>Dry Skin Saviors!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    
                </div><!--/.primary-->
                
                <div class="col">
                    <img class="colPic" src="image/Cleasing.jpg">
                    <h2>Signs of Aging</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
                    
                </div><!--/.secondary-->

  
            </div>    


 
            <div class="CTA" onclick="onButtonClick()">
                    <p class="btnText" id="myBtn">Show More !</p>                
                </div>   
                <!--<button id="myBtn">Show More !</button>-->
              


            <div class="hide" id="more" style="display: none">	
			
                <div class="col">
                    <img class="colPic" src="image/Aqua.jpg">
                    <h2>Dry Skin Saviors!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                    
                    
                </div><!--/.primary-->
                
                <div class="col">
                    <img class="colPic" src="image/Cleasing.jpg">
                    <h2>Signs of Aging</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                    
                    
                </div><!--/.secondary-->

               
      
                
            </div>   
   
        </div><!--/.container-->
		
    </div><!--/.wrap-->

  
 

    
    <footer class="main-footer">
        <div class="first">
            <div class="bottomMenu">
                <a href="#">Shop</a>
                <a href="#">Collections</a>
                <a href="#">Concerns</a>
                <a href="#">Best-Sellers</a>
                <a href="#">About</a>
            </div>
        </div>

        <div class="second">
            <p>Copyright © dmKorea. All Rights Reserved</p>
        </div>
    </footer>
        }
    }
}

export default App;