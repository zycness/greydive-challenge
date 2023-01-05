import React from "react";

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white min-h-[15vh] flex items-center'>
      <div className='container mx-auto flex justify-center '>
        <h5 className='text-gray-300'>
          Made with 💖 by{" "}
          <a
            href='https://www.linkedin.com/in/kevinnahuelf/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-gray-400'
          >
            Kevin Flores
          </a>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
