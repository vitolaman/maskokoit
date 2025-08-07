// StickyScroll.tsx

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
  onActiveCardChange,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
  onActiveCardChange?: (index: number) => void;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
    onActiveCardChange?.(closestBreakpointIndex); // ← Notify parent
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #000000, #000000)",
    "linear-gradient(to bottom right, #0D0C1D, #0D0C1D)",
    "linear-gradient(to bottom right, #122932, #122932)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div
      className="relative flex h-[80vh] justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar-none"
      ref={ref}
    >
      {/* left text */}
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-64" />
        </div>
      </div>

      {/* sticky right card */}
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-full w-1/2 overflow-hidden lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
