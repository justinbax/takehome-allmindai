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
        <div className="flex flex-row justify-end w-full">TODO Dropdown</div>
      </div>
    </nav>
  );
}
