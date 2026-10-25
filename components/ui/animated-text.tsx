"use client"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  text: string
  fontSize?: number
  minWeight?: number
  maxWeight?: number
  animationDuration?: number
  delayMultiplier?: number
}

export function AnimatedText({
  text,
  fontSize = 150,
  minWeight = 0,
  maxWeight = 840,
  animationDuration = 1.5,
  delayMultiplier = 0.25,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const spans = containerRef.current.querySelectorAll("span")
    const numLetters = spans.length

    spans.forEach((span, i) => {
      const mappedIndex = i - numLetters / 2
      span.style.animationDelay = mappedIndex * delayMultiplier + "s"
    })
  }, [text, delayMultiplier])

  const characters = text.split("").map((char, index) => (
    <span
      key={index}
      aria-hidden="true"
      className="inline-block"
      style={{
        animation: `breath ${animationDuration}s alternate cubic-bezier(0.37, 0, 0.63, 1) infinite`,
        animationFillMode: "both",
        fontVariationSettings: `"wght" ${minWeight}`,
      }}
    >
      {char}
    </span>
  ))

  return (
    <div className="flex min-w-0 items-center justify-center">
      <p
        ref={containerRef}
        aria-label={text}
        className="m-0 whitespace-nowrap font-sans font-black uppercase leading-[0.78] tracking-[-0.075em]"
        style={{
          fontFamily: '"Roboto Flex", var(--font-sans)',
          fontSize: `min(${fontSize}px, 14vw)`,
          fontFeatureSettings: '"wght"',
        }}
      >
        {characters}
        <style>{`
          @keyframes breath {
            0% {
              font-variation-settings: "wght" ${minWeight};
            }
            100% {
              font-variation-settings: "wght" ${maxWeight};
            }
          }

          @media (prefers-reduced-motion: reduce) {
            @keyframes breath {
              from, to {
                font-variation-settings: "wght" ${maxWeight};
              }
            }
          }
        `}</style>
      </p>
    </div>
  )
}

