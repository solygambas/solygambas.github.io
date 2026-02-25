"use client";

import { useParams } from "next/navigation";
import { useNotFoundRedirect } from "../lib/redirect-utils";

export default function LocaleNotFound() {
  const params = useParams();
  const locale = params.locale as string;

  useNotFoundRedirect(locale);
  return null;
}
