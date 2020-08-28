import React from 'react';
import {Icon} from 'semantic-ui-react';

const data = [
    ["Alicia Keys","IT CAN'T BE HELD BACK ANYMORE","https://the-talks.com/wp-content/uploads/2016/05/Alicia-Keys-01.jpg"],
    ["Chilly Gonzales","I TRY TO PULL THE CURTAIN BACK","https://the-talks.com/wp-content/uploads/2019/01/Chilly-Gonzales-01.jpg"],
    ["Kevin Kline","IT'S A DIFFERENT SORT OF THRILL","https://the-talks.com/wp-content/uploads/2014/09/Kevin-Kline-01.jpg"]
 ]

const SectionFour = () =>(
    <section id="s4">
        <div className="content">
            <div className="column main">
                <div>
                    <h4>LAST WEEK'S INTERVIEW</h4>
                    <img src="https://the-talks.com/wp-content/uploads/2019/12/Matt-Damon-01.jpg" alt="New Interview hook" id="hook" />
                    <h3>MATT DAMON: "THESE TYPES OF MOVIES ARE GOING AWAY"</h3>
                </div>
                <div>
                    <h4>INTERVIEW DIRECTORY</h4>
                    <h4>DECEMBER 11, 2019</h4>
                    <br />
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="column sub">
                <div className="reel vertical">
                    {data.map((item,index)=>(
                        <div className="picBox" key={index}>
                            <img src={item[2]} alt={item[0]} />
                            <h5>{item[0]}</h5>
                            <em>{item[1]}</em>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default SectionFour;