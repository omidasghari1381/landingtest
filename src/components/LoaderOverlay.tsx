"use client";
import React from "react";
import GlassCoinLoader from "./GlassCoinLoader";

const OUTRO_MS = 1800;

export function LoaderOverlay({ open }: { open: boolean }) {
  const [visible, setVisible] = React.useState(open);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
    } else if (visible) {
      setClosing(true);
      const t = setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, OUTRO_MS);
      return () => clearTimeout(t);
    }
  }, [open, visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-md ${closing ? "circle-hole-out" : ""}`}
        style={closing ? ({ ["--hole" as any]: "0vmax" } as React.CSSProperties) : undefined}
      />

      <div className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${closing ? "opacity-0" : "opacity-100"}`}>
        <div className="pointer-events-auto">
          <GlassCoinLoader withBackground={false} />
        </div>
      </div>
    </div>
  );
}