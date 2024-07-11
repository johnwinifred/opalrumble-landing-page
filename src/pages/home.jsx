import React from 'react'
import Layout from '../layout/layout'
import Button from '../components/button'
import Opalpicture from '../../public/Pic/opal.jpg'
import PastEvent from '../components/pastevents'
import Testimonial from '../components/Testimonials'
import { Link, useNavigate } from 'react-router-dom'
import TypingText from '../components/typingtext'
import Alert from '../components/alert'


function Home() {
  const Navigate = useNavigate();
  return (
    <Layout>

        <div className='w-full mt-12 pt-12'>
            <div className='flex flex-col pt-12 gap-4 w-full h-fit text-white p-12 items-center justify-center'
            style={{ background: 'radial-gradient(circle, rgba(6,128,18,1) 4%, rgba(5,166,13,1) 15%, rgba(10,97,28,0.9463087248322147) 93%)' }}
            >
               <TypingText className='text-3xl md:text-5xl font-semibold' text='The Biggest.'/>
               <TypingText className='text-3xl md:text-5xl font-semibold' text='The Best.'/>
               
               <p className='text-center'>We are dedicated to transforming, empowering, and harnessing the potential of the next generation. Join us as we build the largest platform where young talents can shine, compete, and achieve their dreams.</p>
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2FLxjWD_DkhQRikBMMtCD06bCx3yttKKzlNHA0qtqZermsg/viewform?usp=pp_url">
                
               <Button 
                type="submit"
                title="Join Us"
                textcolor={'text-white'}
                className="rounded-md bg-[#f79f17] text-white"
        />
                </a>
              
            </div>
            <div className='pt-12' id='aboutus'>
              <span className='text-3xl md:text-5xl font-semibold'>About Opal Rumble</span>
              <iframe width="460" className="pt-12 w-fit md:w-full md:h-[400px]"
              height="315" 
              src="https://www.youtube.com/embed/kFECnDOqZyM?si=dXowR3Mr99OUyp35" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
              </iframe>
            </div>

            <div className='flex flex-col md:flex-row w-full h-fit md:h-[460px] justify-between pt-12'>
                <div className='w-full md:w-1/2 gap-4 transform transition-transform duration-1000 ease-in-out'>
                    <p className='text-3xl md:text-5xl font-semibold pb-6'>Meet The Visionairies</p>
                    <p className='pb-6'>Opal Tutorials and Educational Services, established in 2017 as a tutorial service, has evolved into a registered organization supporting youth and community development.</p>
                    <p className='pb-6'>They launched Opal Rumble in 2023, is a competition platform aimed at fostering innovation and academic excellence among young persons. The organization’s annual competition editions are designed to align with the overarching objectives of Opal Tutorials and Educational Services.</p>
                    <a href="https://web.facebook.com/Opaltutorial/">
                    <Button 
                    type="submit"
                    title="Know More"
                    textcolor={'text-white'}
                    className="rounded-md bg-[#f79f17] text-white"
                    
                    
                    />
                    </a>
                </div>
                <div className='transform transition-transform duration-1000 ease-in-out hover:translate-x-[-40%]'>
                    <img src={Opalpicture} alt="" className='h-full pt-6 md:pt-0'/>
                    <div className='relative  bottom-16 left-0 bg-green-800 text-center'>
                    <p className='text-2xl font-semibold text-white'>CEO, Opal Tutorials</p>
                    <p className='text-xl  text-white'>David Obot</p>
                    </div>
                </div>
            </div>
           

          <div className='w-full h-full mt-12 mb-12' id='pastevent'>
            <p className='text-3xl md:text-5xl font-semibold pb-6'>Past Events- Opal Rumble 1.0</p>
            <p className='text-justify pb-6'>Opal Rumble 1.0, hosted by Opal Tutorial at the University of Uyo, saw over 120 students competing in a dynamic three-stage quiz event. Designed to reignite academic enthusiasm and improve grades, the competition offered substantial cash prizes totaling over 250,000 Naira to provide financial relief and motivation.</p>

           <p>By making learning fun and competitive, Opal Rumble 1.0 successfully boosted student engagement in academics. This event highlighted the potential for educational activities to be both rewarding and enjoyable, effectively supporting students both academically and financially.</p>
            <PastEvent />
          </div>
          <div className='w-full h-full mt-12 mb-12'>
            <p className='text-3xl md:text-5xl font-semibold pb-6'>Testimonial</p>
            <Testimonial />
          </div>

{/* Upcoming Events */}
         <div id='upcomingevent' className='flex flex-col pb-12'>
         <p className='text-3xl md:text-5xl font-semibold pb-6'>Upcoming Events- Opal Rumble 2.0</p>
         <div className='flex  flex-col md:flex-row w-full h-fit md:h-[460px] justify-between pt-12'>
                <img src={Opalpicture} alt="" className='h-full'/>
    
          <div className='w-full md:w-1/2 gap-4' >
                    <p className='text-3xl md:text-5xl font-semibold pb-6'>About the Event</p>
                    <p className='pb-6'>Opal Tutorial is excited to announce Opal Rumble 2.0, a competition focused on innovation to tackle pressing issues of waste management and climate change. This year's event calls on the brightest minds from secondary schools across Akwa Ibom State, with plans to extend participation to tertiary institutions.</p>
                    <p className='pb-2'>By encouraging innovative solutions to environmental challenges, Opal Rumble 2.0 aims to foster creativity and practical problem-solving skills among students. Join us in this vital initiative to inspire the next generation of thinkers and doers, committed to creating a sustainable future.</p>
                    <p className='pb-2 font-semibold'>Download Opal Rumble 2.0 Event Brochure 👇</p>
                    <Button
                    type="submit"
                    title="Download"
                    textcolor={'text-white'}
                    className="rounded-md bg-[#f79f17] text-white"
                    />
                </div>
          </div>
         </div>
        </div>
    </Layout>
  )
}

export default Home;