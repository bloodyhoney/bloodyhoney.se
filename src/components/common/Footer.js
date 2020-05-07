import React from "react";

function Footer() {
  return (
    <div id="contact">
      <footer className="bg-blue-400">
        <nav className="flex justify-between p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            &copy; Bloodhoney {new Date().getFullYear()}
          </p>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
