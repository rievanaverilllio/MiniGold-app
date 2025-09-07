"use client";
import React from "react";
import { useLenisSmoothScroll } from "@/lib/useLenisSmoothScroll";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenisSmoothScroll();
  return <>{children}</>;
}
