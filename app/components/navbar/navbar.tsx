'use client';

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

//Anything passed in Container will be passed as children and rendered in the div in the Container component

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b border-gray-200">
            <Container>
                <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                    <Logo/>
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </div>
    </div>
  );
};

export default Navbar;