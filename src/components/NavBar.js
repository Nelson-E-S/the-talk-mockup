import React from 'react';
import {Icon} from 'semantic-ui-react';

const Navbar = () =>(
    <header>
        <nav id="bar">
            <div id="menuBox"><Icon name="bars" size="large" /></div>
            <div id="list">
                <ul>
                    <li><img src="https://the-talks.com/wp-content/themes/thetalks/img/the-talks-logo@2x.png" alt="The Talks logo" id="logo"/></li>
                    <a href="#InterviewDirectory"><li>Interview Directory</li></a>
                    <a href="#WorldGuide"><li>World Guide</li></a>
                    <li>
                        <Icon name="facebook" />
                        <Icon name="twitter" />
                        <Icon name="instagram" />
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar;