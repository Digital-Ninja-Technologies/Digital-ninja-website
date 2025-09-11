declare module "@tawk.to/tawk-messenger-react" {
  import * as React from "react";

  export interface TawkMessengerReactProps {
    propertyId: string;
    widgetId: string;
    onLoad?: () => void;
    onBeforeLoad?: () => void;
    onStatusChange?: () => void;
    onChatStarted?: () => void;
  }

  const TawkMessengerReact: React.ForwardRefExoticComponent<
    TawkMessengerReactProps & React.RefAttributes<any>
  >;

  export default TawkMessengerReact;
}

interface Window {
  Tawk_API?: any; 
}
