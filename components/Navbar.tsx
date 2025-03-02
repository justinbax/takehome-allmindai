"use client";

export default function Navbar() {
  return (
    <nav className="flex bg-[#00000020] backdrop-blur-md text-lg jusitfy-center py-[10px] w-full rounded-md">
      <div className="max-w-full w-full flex flex-row px-[10px]">
        <div className="flex items-center">
          <a href="/" className="mr-[20px]">
            <img
              className="flex items-center h-[25px] object-contain w-full"
              src="assets/logo.png"
            ></img>
          </a>
        </div>
        <div className="flex flex-row justify-end w-full">
          <ul className="flex gap-4">
            <li>
              <a href="/" className="relative navbar-option inline-block px-2 transition hover:-translate-y-0.5">
                <span className="font-sans">Blog</span>
                <span className="absolute bottom-0 left-0 navbar-underline w-0 transition-all h-0.5 bg-gray-400"></span>
              </a>
            </li>
            <li>
              <a href="/" className="relative navbar-option inline-block px-2 transition hover:-translate-y-0.5">
                <span className="font-sans">Pricing</span>
                <span className="absolute bottom-0 left-0 navbar-underline w-0 transition-all h-0.5 bg-gray-400"></span>
              </a>
            </li>
            <li>
              <a href="/" className="relative navbar-option inline-block px-2 transition hover:-translate-y-0.5">
                <span className="font-sans">Log In</span>
                <span className="absolute bottom-0 left-0 navbar-underline w-0 transition-all h-0.5 bg-gray-400"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
