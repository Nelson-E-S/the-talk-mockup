import React from 'react';
import {Icon,Divider} from 'semantic-ui-react';

const SectionOne = () =>(
    <section id="s1">
        <div className="content">
            <Divider horizontal />
            <div className="row">
                <div className="main">
                    <h3>NEW INTERVIEW</h3>
                    <img src="#" alt="New Interview hook" />
                    <h2>MATT DAMON: "THESE TYPES OF MOVIES ARE GOING AWAY"</h2>
                </div>
                <div className="sub">
                    <h3>INTERVIEW DIRECTORY</h3>
                    <div className="flexedDisplay">
                        {["ARCHITECTURE","ART","FASHION","FILM","FOOD","LITERATURE","MUSIC","SPORTS"].map((item,index)=><img src="#" id={`IDimg${index+1}`} key={item} alt={item} />)}
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
                <div className="sub">
                    <h3>LIFE</h3>
                    <p><b><em>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</em></b></p>
                    <div id="author">
                        <Icon name="chevron left" />
                        <p><b>FERRAN ADRIA</b><br /><span>Spain, Chef</span></p>
                        <Icon name="chevron right" />
                    </div>
                </div>
            </div>
            <Divider horizontal />
        </div>
    </section>
);