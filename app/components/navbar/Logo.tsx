'use client'; // This is a client component only Not server component.

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
  return (
    <Image
      alt="TravelPal Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src="/images/TravelPalv1.png"
    />
  );
};

export default Logo;