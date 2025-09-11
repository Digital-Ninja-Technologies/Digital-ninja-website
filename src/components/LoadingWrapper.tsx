"use client";

import type React from "react";

import { useEffect, useState } from "react";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const MINIMUM_LOADING_TIME = 3000; // 3 seconds minimum for animation visibility
    const startTime = Date.now();
    let assetsLoaded = false;
    let progressInterval: NodeJS.Timeout;

    // Function to check if all assets are loaded
    const checkAssetsLoaded = () => {
      const images = document.querySelectorAll("img");
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
      const scripts = document.querySelectorAll("script[src]");

      const totalAssets = images.length + stylesheets.length + scripts.length;
      let loadedAssets = 0;

      // Check images
      images.forEach((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          loadedAssets++;
        }
      });

      // Check stylesheets
      stylesheets.forEach((link) => {
        try {
          const linkEl = link as HTMLLinkElement;
          if (linkEl.sheet && (linkEl.sheet as CSSStyleSheet).cssRules) {
            loadedAssets++;
          }
        } catch (e) {
          // Cross-origin stylesheets might throw errors, consider them loaded
          loadedAssets++;
        }
      });

      // Check scripts (assume loaded if they exist)
      loadedAssets += scripts.length;

      const assetProgress =
        totalAssets > 0 ? (loadedAssets / totalAssets) * 100 : 100;
      return { loaded: loadedAssets === totalAssets, progress: assetProgress };
    };

    // Animate progress bar
    const animateProgress = () => {
      progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const timeProgress = (elapsed / MINIMUM_LOADING_TIME) * 100;
        const { loaded, progress: assetProgress } = checkAssetsLoaded();

        // Use the higher of time-based or asset-based progress
        const currentProgress = Math.max(timeProgress, assetProgress);

        // Add some randomness for realistic feel, but cap at 95% until both conditions are met
        const randomFactor = Math.random() * 2;
        let newProgress = Math.min(currentProgress + randomFactor, 95);

        // Only allow completion when both conditions are met:
        // 1. Minimum time has passed
        // 2. All assets are loaded
        if (elapsed >= MINIMUM_LOADING_TIME && loaded) {
          assetsLoaded = true;
          newProgress = 100;
        }

        setLoadingProgress(newProgress);

        // Complete loading when we reach 100%
        if (newProgress >= 100 && assetsLoaded) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
          }, 800); // Show 100% for a moment
        }
      }, 100);
    };

    // Start the animation
    animateProgress();

    // Also listen for window load event as backup
    const handleWindowLoad = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= MINIMUM_LOADING_TIME) {
        assetsLoaded = true;
      }
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-7">
          <img src="/loading.svg" alt="" />
        </div>

        {/* Progress bar */}
        <div className="w-80 relative">
          <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
            <div
              className="bg-gradient-to-r from-[#FF6602] via-[#FF7E29] to-[#FF7E29] h-2 rounded-full transition-all duration-300 ease-out shadow-sm relative overflow-hidden"
              style={{ width: `${loadingProgress}%` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>

          {/* Progress percentage */}
          {/*<div className="text-center mt-4">
            <span className="text-sm text-gray-400 font-medium">
              {Math.round(loadingProgress)}%
            </span>
          </div>
           */}
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
