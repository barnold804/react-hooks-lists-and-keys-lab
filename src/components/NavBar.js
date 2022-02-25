import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
           <a href="#home" >{links[0]}</a>
           <a href="#about" >{links[1]}</a>
           <a href="#projects" >{links[2]}</a>
    </nav>
  );
}

export default NavBar;

// alternative for code staring from line 6?:
  // renders three <a> elements
  // displays the correct text for each <a> element
  // each <a> element has the correct href attribute

//   const linkLinks = links.map((link)=>{
//     return <a key={link} href={link}>{link}</a>
//   });
//     return(
//       <nav>{linkLinks}</nav>
//  )
// return <nav>
