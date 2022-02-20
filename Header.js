import React from "react";

function Header() {
  return (
    <header>
      <img
        src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
        alt="Problem?"
      />
      <p>Meme Generator</p>
      <a
        style={{ marginLeft: "auto", marginRight: "10%", float: "right" }}
        href="https://github.com/patilkrunal/meme-generator"
      >
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.afterdawn.fi%2Fv3%2Fnews%2Foriginal%2Fgithub-logo.png&f=1&nofb=1"
          alt="Github"
          style={{ height: "35%" }}
        />
      </a>
    </header>
  );
}

export default Header;
