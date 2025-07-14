"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavBar({ items, className }) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50",
        "bottom-4 md:top-6 md:bottom-auto",
        className
      )}
    >
      <div className="flex items-center gap-1.5 md:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 md:py-1.5 px-1 rounded-full shadow-md md:shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.url;

          return (
            <Link
              key={item.name}
              href={item.url}
              className={cn(
                "relative cursor-pointer font-medium rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                "px-3 py-1.5 text-xs", // Mobile
                "md:px-6 md:py-2 md:text-sm", // Desktop
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-0.5 md:w-8 md:h-1 bg-primary rounded-t-full">
                    <div className="absolute w-8 h-4 md:w-12 md:h-6 bg-primary/20 rounded-full blur-md -top-1 md:-top-2 -left-1.5 md:-left-2" />
                    <div className="absolute w-6 h-4 md:w-8 md:h-6 bg-primary/20 rounded-full blur-md -top-0.5 md:-top-1" />
                    <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-primary/20 rounded-full blur-sm top-0 left-1.5 md:left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
