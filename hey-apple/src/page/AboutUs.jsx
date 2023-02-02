import { Fragment } from 'react';
import '../scss/AboutUs.scss';
import Header from '../components/Header';

function AboutUs() {
    return (
        <div id="Aboutuswrap">
            <Header />
            <div id="introwrap">
            </div>
            <div id="introwrap2">
                <div class="introtitle">ring up your fruit!</div>
                <div class="introtitle2">start now-</div>
            </div>
            <div class="imgwrap">
                <div class="image"><img class="img1" src="/image/MANGO.png"></img></div>
                <div class="image"><img class="img2" src="/image/ORANGE.png"></img></div>
                <div class="image"><img class="img3" src="/image/MANDARINE.png"></img></div>
            </div>
            <div id="middlewrap">
                <img src="/image/peach.png"/>
            </div>
            <div class="middletitle">
                Explore 🔍<br/>Various Fruits<br/> Easily!
            </div>
            <div class="middledetail">
                at products page, you<br/> can check information<br/> on fruits.<br/><br/> just click once for more<br/> information!
            </div>
            <div class="timename">
                cuty sexy fruity 
            </div>



        </div>
    );

      }

      export default AboutUs;

