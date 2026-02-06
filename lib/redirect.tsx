import { useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to ?? router.asPath;

  // Language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (detectedLng) {
      if (to.startsWith("/" + detectedLng) && router.route === "/404") {
        // Prevent endless loop
        void router.replace("/" + detectedLng + router.route);
        return;
      }

      languageDetector.cache?.(detectedLng);
      void router.replace("/" + detectedLng + to);
    }
  }, [router, to]);

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

export const getRedirect = (to: string) => () => {
  useRedirect(to);
  return <></>;
};
