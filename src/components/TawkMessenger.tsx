"use client";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useRef, useEffect } from "react";

const TawkMessenger = () => {
  const tawkMessengerRef = useRef(null);

  const propertyId =
    process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ?? "";
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? "";

  const onLoad = () => {
    console.log("Tawk.to widget loaded!");
  };

  const onBeforeLoad = () => {
    console.log("Tawk.to widget before load!");
  };
  const onStatusChange = () => {
    // No status argument, as required by TawkMessengerReactProps
    console.log("Tawk.to status changed");
  };
  // FIX: Define onChatStarted as a function
  const onChatStarted = () => {
    console.log("Tawk.to chat started!");
  };

  useEffect(() => {
    if ((window as any).Tawk_API) {
      ((window as any).Tawk_API as any).customStyle = {
        visibility: {
          desktop: {
            position: "br",
            xOffset: "60px",
            yOffset: "20px",
          },
          mobile: {
            position: "br",
            xOffset: "10px",
            yOffset: "50px",
          },
          bubble: {
            rotate: "0deg",
            xOffset: "-20px",
            yOffset: "0px",
          },
        },
      };
    }
  }, []);

  return (
    <TawkMessengerReact
      propertyId={propertyId}
      widgetId={widgetId}
      onLoad={onLoad}
      onBeforeLoad={onBeforeLoad}
      onStatusChange={onStatusChange}
      onChatStarted={onChatStarted}
      ref={tawkMessengerRef}
    />
  );
};

export default TawkMessenger;
