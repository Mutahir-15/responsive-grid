import React from "react";

function Grid() {
  return (
    <main className="max-w-[1440px] mx-auto p-2 md:p-10">
      <div className="grid grid-cols-3 grid-rows-6 gap-2 h-screen p-4">
        <header className="col-span-3 row-span-1 bg-[#7358D9] p-4 text-white text-center text-2xl font-bold">
          Header
        </header>
        <div className="col-span-3 md:col-span-1 md:row-span-2 text-white text-center bg-[#2FB2AC] p-4 text-2xl font-bold">
          Sidebar
        </div>
        <div className="col-span-3 md:col-span-2 bg-[#1FA7FB] text-white text-center p-4 text-2xl font-bold">
          Content-1
        </div>
        <div className="col-span-3 md:col-span-1 bg-[#1FA7FB] text-white text-center p-4 text-2xl font-bold">
          Content-2
        </div>
        <div className="col-span-3 md:col-span-1 bg-[#1FA7FB] text-white text-center p-4 text-2xl font-bold">
          Content-3
        </div>
        <footer className="col-span-3 row-span-1 bg-[#7358D9] text-white text-center p-4 text-2xl font-bold">
          Footer
        </footer>
      </div>
    </main>
  );
}

export default Grid;
