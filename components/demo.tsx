"use client";
import React from "react";
import { MaskContainer } from "./ui/svg-mask-effect";

export default function SVGMaskEffectDemo() {
  return (
    <MaskContainer
      revealText={
        <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
          Move your cursor here to reveal the secret
        </p>
      }
    >
      <p className="text-4xl font-bold text-white dark:text-black">
        The secret is revealed ✨
      </p>
    </MaskContainer>
  );
}
