import React from 'react'
import aboutImg from "../../assets/images/about.jpeg";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
  return (

    // <div>
    //     about
    // </div>
    <section>
     <div className="container">
       <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">  
       {/* about img */}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 1g:order-1">
          <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
            </div>
            </div>
             {/* about content */}
             <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                <h2 className="heading">The Medsol helps in your appointment!</h2> 
                <p className="text_para">Medsol helps patients in booking appointments at their convinence and ease </p>

                <p className="text_para mt-[30px]">Our best is something we strive for each day, caring for   our pateints-not looking back at what we accomplised but towards what we can do tomorrow ,Providing the best.</p>

                {/* <Link to='/home'><button className="btn">Learn More</button> </Link> */}
                <button className="btn">Learn More</button> 
             
             </div>
           </div>
          </div>
        </section>
  )
}

export default About