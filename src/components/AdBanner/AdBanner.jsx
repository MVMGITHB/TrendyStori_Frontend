"use client";

import Image from "next/image";
import Link from "next/link";

export default function AdBanner() {
  return (
    <Link
      href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
      target="_blank" 
      rel="noopener noreferrer" 
    >
      <Image
        src="/images/adityaBirlaCreative.png"
        alt="Advertisement Left"
        width={300}
        height={250}
        className="rounded w-full object-contain cursor-pointer"
      />
    </Link>
  );
}
