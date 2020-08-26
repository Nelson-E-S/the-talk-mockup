import React from 'react';

const data = [
                ["Alicia Keys","IT CAN'T BE HELD BACK ANYMORE","https://the-talks.com/wp-content/uploads/2016/05/Alicia-Keys-01.jpg"],
                ["Chilly Gonzales","I TRY TO PULL THE CURTAIN BACK","https://the-talks.com/wp-content/uploads/2019/01/Chilly-Gonzales-01.jpg"],
                ["Kevin Kline","IT'S A DIFFERENT SORT OF THRILL","https://the-talks.com/wp-content/uploads/2014/09/Kevin-Kline-01.jpg"]
             ]

const SectionTwo = () =>(
    <section id="s2">
        <div className="content">
            <div className="row">
                <h4>MOST READ INTERVIEWS</h4>
                <div className="reel">
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
)

export default SectionTwo;