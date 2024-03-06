import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  console.log("callback", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("storage", callback);
  };
};

const setOfferYear = (offerYear: string) => {
  window.localStorage.setItem("offerYear", offerYear);
  window.dispatchEvent(new Event("storage"));
};

export const useOfferYear = () => {
  const offerYear =
    useSyncExternalStore(
      subscribe,
      () => localStorage.getItem("offerYear"),
      () => null,
    ) || "";

  return { offerYear, setOfferYear };
};
