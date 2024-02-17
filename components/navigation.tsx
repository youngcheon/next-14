"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <Link href={"/"}>Home</Link> {path === "/" ? "here" : ""}
        <Link href={"/about-us"}>About Us</Link>
        {path === "/about-us" ? "here" : ""}
      </ul>
    </nav>
  );
}
