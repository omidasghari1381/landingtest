"use client";
import React from "react";
import { LoaderOverlay } from "@/components/LoaderOverlay";

export default function Page() {
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setOpen(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* اگر خواستی مرکز دایره روی عنصر خاصی باشه: center={{ x: "50%", y: "45%" }} */}
      <LoaderOverlay open={open} />

      <main className="min-h-screen grid place-items-center bg-[#0E0F1B] text-white">
        <h1 className="text-3xl font-bold">
          Content appears through a feathered circular reveal
        </h1>
      </main>
    </>
  );
}
