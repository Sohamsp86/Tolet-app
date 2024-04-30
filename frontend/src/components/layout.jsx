import React, { useEffect, useState } from 'react'
import { HomeDown } from './home/homeDown'
import { HomeUp } from './home/homeUp';
import { ContactUs } from './contact/getintouch';
import {Service} from './service';
import {Footer} from './footer';
// import About from './about/about';
// import { Blog } from './blog/blog'
// import Service from './service'

export const Layout = () => {
    const [isScrolled, setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <section className={isScrolled ? "home scrolled" : "home"} id="home">
            <HomeUp/>
            <HomeDown/>
            <Service/>
            {/* <About /> */}
            <ContactUs/>
            <Footer />
            
    </section>
  )
}
