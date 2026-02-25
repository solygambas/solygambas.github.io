"use client";

import { useNotFoundRedirect } from "./lib/redirect-utils";

export default function NotFound() {
  useNotFoundRedirect();
  return null;
}
