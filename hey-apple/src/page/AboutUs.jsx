import { useState,Fragment } from 'react';
import '../scss/AboutUs.scss';
import Header from '../components/Header';
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
function AboutUs() {
  const [isheader,setisheader] = useState(false);
    const navigate = useNavigate();
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.5
          }
        }
      }
      const middlewrapani = {
        view: {x:0, opacity:1,transition: {
            delay:0.1,
          duration:0.3,
          }},
          view2:{
            x:0, opacity:1,transition: {
                delay:0.3,
              duration:0.3,
              }
          },
        
        beforeview:{x:10, opacity:0}}
        const middlewrapani2 = {
            view: {x:0, opacity:1,transition: {
                delay:0.1,
              duration:0.3,
              }},
              view2:{
                x:0, opacity:1,transition: {
                    delay:0.3,
                  duration:0.3,
                  }
              },
            
            beforeview:{x:-10, opacity:0}}
        const spring = {
            hidden:{scale:0.3},
            show:{scale:1.0},
            transition: {
              type: "spring",
              damping: 10,
              stiffness: 100,
              delayChildren:0.5,
              bounce: 0.25,
            }
            }
            const list = {
                start:{scale:0.3,opacity:0},
                show:{scale:1.0,opacity:1,transition: {
                    duration:1.0,
                    delayChildren:0.3,
                    stiffness: 110,
  staggerChildren: 0.5,
                  }},
                    }
                
                
            const item = {
                start:{scale:0,opacity:0},
                show:{scale:1.0,opacity:1},
                
                }
             
            // function headerMoving(direction){
            //   if(direction==="up"){
            //     setisheader(false);
            //   } else if (direction ==="down"){
            //     setisheader(true);
            //   }
            // }

            // let prevScrollTop=0;
            // document.addEventListener("scroll",function(){
            //   let nextScrollTop = window.pageYOffset ||0;
            //   if(nextScrollTop> prevScrollTop){
            //     headerMoving("down");
            //   } else if (nextScrollTop<prevScrollTop){
            //     headerMoving("up");
            //   }
            //   prevScrollTop = nextScrollTop;
            // })
            const handleOnWheel = (e) => {
              if (e.nativeEvent.wheelDelta > 0) {
                  // scroll up event
                  console.log('scroll up');
                  setisheader(false);
                } else {
                  // scroll down event 
                  console.log('scroll down');
                  setisheader(true)
              }
          }
    return (
        <div id="Aboutuswrap" onWheel={handleOnWheel}>
            <Header isheader = {isheader}/>
     
            <motion.div id="introwrap" >
                <div id = "introratio1">
                </div>
                <motion.div variants = {spring} initial = "hidden" animate = "show" id="introwrap2">
                <motion.div  className="introtitle">ring up your fruit!</motion.div>
                <motion.div className="introtitle2" onClick = {()=>{navigate('/')}}>start now-{'>'}</motion.div>
                <div id = "introratio2">
                </div>
            </motion.div>
            <motion.div variants = {list} initial="start" animate="show">
           <motion.div className="image1" variants = {item}><img className="img1" src="/image/MANGO.png" width="70%" height="100%"></img></motion.div>
                 <motion.div className="image2" variants = {item}><img className="img2" src="/image/ORANGE.png" width="80%" height="100%"></img></motion.div>
                <motion.div className="image3" variants = {item}><img className="img3" src="/image/MANDARINE.png" width="70%" height="100%"></img></motion.div>
                </motion.div>
            </motion.div>
         
            <div id="middlewrap">
                <div id = "middlewrapratio"></div>
                <img width="50%" height="30%" src="/image/PEACH.png"/>
                <div initial = "beforeview" variants={middlewrapani} whileInView="view">
                <motion.div className="middletitle" initial = "beforeview" variants={middlewrapani} whileInView="view">
                Explore 🔍<br/>Various Fruits<br/> Easily!
            </motion.div>
            <motion.div className="middledetail"  initial = "beforeview" variants={middlewrapani} whileInView="view2">
                at products page, you<br/> can check information<br/> on fruits.<br/><br/> just click once for more<br/> information!
            </motion.div>
            <div className="timename">
                cuty sexy fruity 
            </div>
            </div>
            </div>
            <div id = "middlewrap2" className = "fade-in-box">
                <div id = "middlewrap2ratio">
                </div>
                <motion.div id = "middlewrap2text1" variants={middlewrapani2}  initial = "beforeview" whileInView="view">Ring Your Fruits<br/> Up Easily!</motion.div>
                <motion.div id = "middlewrap2text2" variants={middlewrapani2}  initial = "beforeview" whileInView="view2">by dropping a photo,<br/> you can ring your<br/> fruits up. <br/><br/>when you drop a<br/> photo, our AI will ring<br/> it up for you!</motion.div>
                <div id = "middlewrap2leftrec"><img src="/image/aboutusmd2img2.png"  width="80%"/></div>
                <div id = "middlewrap2rightrec"><img src="/image/aboutusmd2img1.png" width="80%"/></div>
            </div>
            <div id = "demowrap">
            <div id = "demowrapratio"></div>
            <div id = "demowraptext">demonstration</div>
            
            <div id = "demorec"></div>
            <motion.div id="demovideo" initial={{scale:0.3, opacity:0}} whileInView = {{delay:0.2,scale:1,opacity:1}}>{/* <ReactPlayer
    url={process.env.PUBLIC_URL + '/videos/demovideo.mp4'}
    width='100%'
    height='100%'
    playing={true}
    muted={true}
    controls={true}
    loop={true} 
    />*/}<video muted controls loop width='100%'
    height='100%'>
            <source src='/videos/demovideo.mp4' type="video/mp4" />
        </video></motion.div>
            </div>
          
            



        </div>
    );

      }

      export default AboutUs;

