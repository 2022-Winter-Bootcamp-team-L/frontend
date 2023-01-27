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
            <div id="middlewrap2">
                <img src="/image/cam-removebg-preview.png"/>
            </div>
            <div class="middletitle2">
                Ring Your Fruits<br/> Up Easily!
            </div>
            <div class="middledetail2">
                by dropping a photo,<br/> you can ring your<br/> fruits up.<br/><br/> when you drop a<br/> photo, our AI will ring<br/> it up for you!
            </div>
            <div id="middlewrap3">
                <img src="/image/books_original-removebg-preview.png"/>
            </div>
            <div class="demotitle">
                demonstration
            </div>
            <div id="demo">
            </div>
            <div id="demo2">
            </div>

        </div>
    );

      }

      export default AboutUs;