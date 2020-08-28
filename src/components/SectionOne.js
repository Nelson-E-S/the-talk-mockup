import React from 'react';
import {Icon} from 'semantic-ui-react';

const SectionOne = () =>(
    <section id="s1">
        <div className="content">
            <div className="row">
                <div className="main">
                    <h4>NEW INTERVIEW</h4>
                    <img src="https://the-talks.com/wp-content/uploads/2019/12/Matt-Damon-01.jpg" alt="New Interview hook" id="hook" />
                    <h3>MATT DAMON: "THESE TYPES OF MOVIES ARE GOING AWAY"</h3>
                </div>
                <div className="sub">
                    <h4>INTERVIEW DIRECTORY</h4>
                    <div className="flexedDisplay">
                        {["ARCHITECTURE","ART","FASHION","FILM","FOOD","LITERATURE","MUSIC","SPORTS"].map((item,index)=><img src="https://the-talks.com/wp-content/uploads/2016/05/Alicia-Keys-01.jpg" id={`IDimg${index+1}`} key={item} alt={item} />)}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="main">
                    <h4>DECEMBER 11, 2019</h4>
                    <br />
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="sub space-it">
                    <h4>LIFE</h4>
                    <p><b><em>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</em></b></p>
                    <div id="author">
                        <Icon name="chevron left" />
                        <p><b>FERRAN ADRIA</b><br /><span>Spain, Chef</span></p>
                        <Icon name="chevron right" />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SectionOne;