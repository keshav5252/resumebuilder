import React, { useRef, useEffect } from "react";
import "../styles/Home.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const monitor = useRef(null);
  const text = useRef(null);
  const btn = useRef(null);
  const navigate = useNavigate();
  function trans() {
    
    navigate('/templates')
  }
  
  useEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(text.current, {
        y: 30,
        opacity: 0,
        duration: 1,
      });

      tl.from(btn.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
      });

      tl.from(monitor.current, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
      });
    }, monitor);

    btn.current.addEventListener('click', ()=>{
      btn.current.innerHTML = `<div class="loader"></div>`
    })

    return () => ctx.revert(); // Cleanup animation on unmount
  }, []);

  return (
    <section className="overflow-hidden w-full flex gap-5 relative items-center flex-col p-5 hero bg-[#111]">
      <h1 className="text-white text-center" ref={text}>
        Create <span className="text-orange-500">Professional</span> Resume
      </h1>
      <button
        ref={btn}
        onClick={trans}
        className="bg-white flex py-2 px-3 gap-1 rounded-full hover:bg-[#e4e4e4]"
      >
        <i className="ri-add-circle-fill"></i>Create
      </button>
      <div
        ref={monitor}
        className="monitor h-4/6 w-4/5 absolute bottom-0 left-2/4"
      >
        <div className="skeleton-container">
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-header"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-footer"></div>
          <div className="skeleton skeleton-footer"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-footer"></div>
          <div className="skeleton skeleton-footer"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
          <div className="skeleton skeleton-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
