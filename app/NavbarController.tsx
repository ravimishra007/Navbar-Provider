"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNavbar } from "./NavbarProvider";
import Navbar from "@/components/shared/Navbar";

export default function NavbarController() {
  const pathname = usePathname();
  const { showNavbar, setShowNavbar } = useNavbar();

  useEffect(() => {
    if (pathname.startsWith("/admin")) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [pathname, setShowNavbar]);

  return showNavbar ? <Navbar /> : null;
}
