import React from 'react';
import {Icon} from 'semantic-ui-react';

const Navbar = () =>(
    <header>
        <nav id="bar">
            <div id="menubox"><Icon name="bars" size="large" /></div>
            <div id="list">
                <ul>
                    <li><img src="#" alt="The Talks logo" id="logo"/></li>
                    <a href="#IntervierDirectory"><li>Interview Directory</li></a>
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