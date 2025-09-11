"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Client logos
const clients = [
  { name: "Client 1", logo: "/client1.svg" },
  { name: "Client 2", logo: "/client2.svg" },
  { name: "Client 3", logo: "/client3.svg" },
  { name: "Client 4", logo: "/client4.svg" },
  { name: "Client 5", logo: "/client5.svg" },
  { name: "Client 6", logo: "/client6.svg" },
  { name: "Client 7", logo: "/client7.svg" },
  { name: "Client 8", logo: "/client8.svg" },
  { name: "Client 9", logo: "/client9.svg" },
];

export default function ClientsSlide() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const allClients = [...clients, ...clients];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative overflow-hidden w-full">
      <div className="marquee-container">
        <div className="marquee">
          {allClients.map((client, index) => (
            <div key={`${client.name}-${index}`} className="mx-8">
              <div className="w-28 h-16 flex justify-center items-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={260}
                  height={180}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
