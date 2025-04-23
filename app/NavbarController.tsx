"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useNavbar } from "./NavbarProvider";
import RootNavbar from "@/components/RootNavbar";

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

  return showNavbar ? <RootNavbar /> : null;
}
