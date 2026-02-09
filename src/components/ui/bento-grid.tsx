"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export const BentoGrid = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <ul className={cn("grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[38rem] xl:grid-rows-2", className)}>
      {children}
    </ul>
  );
};

interface BentoGridItemProps {
  className?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

export const BentoGridItem = ({ className, icon, title, description }: BentoGridItemProps) => {
  const { theme } = useApp();
  const isDark = theme === 'dark';

  // Neon cyan/purple gradient for the GlowingEffect - Full tech neon aesthetic
  const neonGradient = `radial-gradient(circle, rgba(6,182,212,0.45) 10%, rgba(6,182,212,0) 22%),
                radial-gradient(circle at 35% 45%, rgba(168,85,247,0.35) 6%, rgba(168,85,247,0) 18%),
                radial-gradient(circle at 65% 55%, rgba(34,211,238,0.30) 10%, rgba(34,211,238,0) 22%),
                radial-gradient(circle at 45% 70%, rgba(139,92,246,0.25) 10%, rgba(139,92,246,0) 22%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  rgba(6,182,212,0.55) 0%,
                  rgba(168,85,247,0.45) calc(25% / var(--repeating-conic-gradient-times)),
                  rgba(34,211,238,0.40) calc(50% / var(--repeating-conic-gradient-times)),
                  rgba(139,92,246,0.50) calc(75% / var(--repeating-conic-gradient-times)),
                  rgba(6,182,212,0.55) calc(100% / var(--repeating-conic-gradient-times))
                )`;

  // Light theme gradient
  const lightGradient = `radial-gradient(circle, rgba(6,182,212,0.25) 10%, rgba(6,182,212,0) 22%),
                radial-gradient(circle at 35% 45%, rgba(168,85,247,0.20) 6%, rgba(168,85,247,0) 18%),
                radial-gradient(circle at 65% 55%, rgba(34,211,238,0.18) 10%, rgba(34,211,238,0) 22%),
                radial-gradient(circle at 45% 70%, rgba(139,92,246,0.15) 10%, rgba(139,92,246,0) 22%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  rgba(6,182,212,0.30) 0%,
                  rgba(168,85,247,0.25) calc(25% / var(--repeating-conic-gradient-times)),
                  rgba(34,211,238,0.22) calc(50% / var(--repeating-conic-gradient-times)),
                  rgba(139,92,246,0.28) calc(75% / var(--repeating-conic-gradient-times)),
                  rgba(6,182,212,0.30) calc(100% / var(--repeating-conic-gradient-times))
                )`;

  return (
    <motion.li
      className={cn("min-h-[16rem] list-none group", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn(
        "relative h-full rounded-2xl border p-1 md:rounded-3xl md:p-1.5 transition-all duration-500 hover:-translate-y-2",
        isDark
          ? "bg-[#0a0a0f] border-white/[0.08] hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15),0_20px_50px_rgba(0,0,0,0.6)]"
          : "bg-white border-cyan-200/60 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.15),0_14px_45px_rgba(6,182,212,0.1)]"
      )}>
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          gradient={isDark ? neonGradient : lightGradient}
        />

        {/* Neon border glow effect */}
        <div className={cn(
          "absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
          isDark
            ? "shadow-[inset_0_0_20px_rgba(6,182,212,0.1),inset_0_0_40px_rgba(168,85,247,0.05)]"
            : ""
        )} />

        {/* Animated background gradient blob */}
        <div className={cn(
          "absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700",
          "bg-gradient-to-br from-cyan-500 via-purple-500 to-cyan-400"
        )} />

        <div className={cn(
          "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-7 z-10",
          isDark ? "bg-[#0d0d14]/90 backdrop-blur-xl" : "bg-white/80 backdrop-blur-sm"
        )}>
          {/* Neon corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={cn(
              "absolute top-0 left-0 w-8 h-[2px] rounded-full",
              isDark ? "bg-gradient-to-r from-cyan-400 to-transparent" : "bg-gradient-to-r from-cyan-500 to-transparent"
            )} />
            <div className={cn(
              "absolute top-0 left-0 w-[2px] h-8 rounded-full",
              isDark ? "bg-gradient-to-b from-cyan-400 to-transparent" : "bg-gradient-to-b from-cyan-500 to-transparent"
            )} />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={cn(
              "absolute bottom-0 right-0 w-8 h-[2px] rounded-full",
              isDark ? "bg-gradient-to-l from-purple-400 to-transparent" : "bg-gradient-to-l from-purple-500 to-transparent"
            )} />
            <div className={cn(
              "absolute bottom-0 right-0 w-[2px] h-8 rounded-full",
              isDark ? "bg-gradient-to-t from-purple-400 to-transparent" : "bg-gradient-to-t from-purple-500 to-transparent"
            )} />
          </div>

          <div className="relative flex flex-1 flex-col justify-between gap-4">
            {/* Icon with neon glow */}
            <div className={cn(
              "relative w-fit rounded-xl border p-3.5 backdrop-blur-sm transition-all duration-500",
              isDark
                ? "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/30 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "bg-gradient-to-br from-cyan-50 to-purple-50 border-cyan-200 group-hover:border-cyan-400"
            )}>
              {/* Icon glow ring on hover */}
              <div className={cn(
                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                isDark ? "shadow-[0_0_15px_rgba(6,182,212,0.4)]" : ""
              )} />
              <div className={cn(
                "relative z-10 transition-all duration-300",
                isDark ? "text-cyan-400 group-hover:text-cyan-300" : "text-cyan-600 group-hover:text-cyan-500"
              )}>
                {icon}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className={cn(
                "pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] transition-colors duration-300",
                isDark
                  ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 group-hover:bg-clip-text"
                  : "text-gray-900 group-hover:text-cyan-700"
              )}>
                {title}
              </h3>
              <p className={cn(
                "font-sans text-sm/[1.25rem] md:text-base/[1.5rem] transition-colors duration-300",
                isDark
                  ? "text-white/50 group-hover:text-white/70"
                  : "text-gray-500 group-hover:text-gray-700"
              )}>
                {description}
              </p>
            </div>
          </div>

          {/* Bottom neon line accent */}
          <div className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500 rounded-full",
            isDark
              ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              : "bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          )} />
        </div>
      </div>
    </motion.li>
  );
};
