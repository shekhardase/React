const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <h1 className="text-white text-2xl">Website Title</h1>
            <ul className="flex space-x-4 mt-2">
                <li className="text-white hover:text-gray-300">Home</li>
                <li className="text-white hover:text-gray-300">About</li>
                <li className="text-white hover:text-gray-300">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
