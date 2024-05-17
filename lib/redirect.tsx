import { useEffect } from "react";
import { useRouter } from "next/router";
import languageDetector from "./languageDetector";

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  // Language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (detectedLng) {
      if (to.startsWith("/" + detectedLng) && router.route === "/404") {
        // Prevent endless loop
        router.replace("/" + detectedLng + router.route);
        return;
      }

      languageDetector.cache && languageDetector.cache(detectedLng);
      router.replace("/" + detectedLng + to);
    }
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to: string) => () => {
  useRedirect(to);
  return <></>;
};
