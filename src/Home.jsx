import React from 'react';
import './Home.css';
import web from "../src/images/bathroom.jpg";
import web1 from "../src/images/bedroom.jpg";
import web2 from "../src/images/garden.jpg";
import web3 from "../src/images/drawingroom.jpg";

function Home() {
    return (
        <div className="Home">

            <div className="main">

            <p align="center"><b>OUR SERVICES</b></p>
                <div class="row">
                    
                    <div class="column">
                        <div class="content">
                            <img src={web} alt="Mountains" ></img>
                            <h3>Bathrooms</h3>
                            <p>You will get well finished bathroom. Neat and cleen and tiles furnished.You will get attatch shower , Bathtub , Attacth Comod and also Indian style comod.Attacth Comod</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="content">
                            <img src={web1} alt="Lights"></img>
                            <h3>Bed Rooms</h3>
                            <p>Bed Ropoms are fine . Well finished , truely color , with king size bed and fully dream light.Bed Ropoms are fine . Well finished , truely color , with king size bed and fully dream light.</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="content">
                            <img src={web2} alt="Nature"></img>
                            <h3>Garden</h3>
                            <p>Bed Ropoms are fine . Well finished , truely color , with king size bed and fully dream light.Bed Ropoms are fine . Well finished , truely color , with king size bed and fully dream light..</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="content">
                            <img src={web3} alt="Mountains"></img>
                            <h3>DrawingRoom</h3>
                            <p>Bed Ropoms are fine . Well finished , truely color , with king size bed and fully dream light.Bed Ropoms are fine . Well finished , truely color , with king size bed and fully dream light.</p>
                        </div>
                    </div>
                </div>




            </div>




        </div>

    );
}
export default Home;
