import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 flex items-center justify-center">
      <main className="container mx-auto px-6 py-12 flex flex-col items-center justify-center w-full -translate-y-10 md:-translate-y-16">
        <div className="w-full flex justify-center">
          <Search />
        </div>
      </main>
    </div>
  );
}

export default App;

