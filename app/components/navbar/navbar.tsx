const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <div className="text-xl font-bold">TravelSoru</div>
      <div className="flex space-x-4">
        <a className="hover:text-gray-300">
          Home
        </a>
        <a href="/destinations" className="hover:text-gray-300">
          Destinations
        </a>
        <a href="/about" className="hover:text-gray-300">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;