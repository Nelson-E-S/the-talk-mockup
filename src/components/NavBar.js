import React from 'react';
import {Icon} from 'semantic-ui-react';
//icons

const Navbar = () =>(
    <header>
        <nav>
            <div id="menubox"></div>
            <div id="nav">
                <ul>
                    <li><img src="#" alt="The Talks logo"/></li>
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