"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  /** اگر true باشه پس‌زمینه ساده میاد؛ اگر نه فقط خود لودر رندر میشه */
  withBackground?: boolean;
  /** کلاس‌های اضافه Tailwind */
  className?: string;
};

const GlassCoinLoader: React.FC<Props> = ({ withBackground = false, className }) => {
  const Wrapper = withBackground ? "div" : React.Fragment;
  const wrapperProps = withBackground
    ? { className: "fixed inset-0 flex items-center justify-center bg-[#0E0F1B]" }
    : {};

  return (
    <Wrapper {...wrapperProps}>
      {withBackground && <div className="absolute inset-0 bg-white/6 backdrop-blur-[8px]" />}

      <div className={`relative flex items-center justify-center ${className ?? ""}`}>
        {/* هاله موجی 1 */}
        <motion.div
          className="absolute rounded-full bg-cyan-400/25 blur-lg"
          style={{ width: 120, height: 120 }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* هاله موجی 2 (با تأخیر) */}
        <motion.div
          className="absolute rounded-full bg-cyan-400/20 blur-lg"
          style={{ width: 120, height: 120 }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        />

        {/* دایره‌ی سفید (سکه) — پالس ملایم */}
        <motion.div
          className="relative rounded-full bg-white shadow-[0_0_24px_rgba(56,189,248,0.35)]"
          style={{ width: 64, height: 64 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </Wrapper>
  );
};

export default GlassCoinLoader;