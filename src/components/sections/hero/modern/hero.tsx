'use client';

import React, { useRef } from 'react';
import ParallaxImage from '@/components/motion/parallax-image';
import { TextLoop } from '@/components/motion/text-loop';
import styles from "./style.module.scss"
import { styleText } from 'util';
const heroContent = [
  { role: 'developer', action: 'code', emoji: '💻', bgColor: 'bg-green-100' },
  { role: 'problem solver', action: 'debug', emoji: '🛠️', bgColor: 'bg-gray-100' },
  { role: 'thinker', action: 'optimize', emoji: '🧠', bgColor: 'bg-yellow-100' },
  { role: 'learner', action: 'grow', emoji: '📚', bgColor: 'bg-purple-100' },
  { role: 'creator', action: 'build', emoji: '✨', bgColor: 'bg-pink-100' },
];

const textLoopVariants = {
  initial: { y: 20, rotateX: 90, opacity: 0, filter: 'blur(4px)' },
  animate: { y: 0, rotateX: 0, opacity: 1, filter: 'blur(0px)' },
  exit: { y: -20, rotateX: -90, opacity: 0, filter: 'blur(4px)' }
};

const textLoopTransition = {
  type: 'spring',
  stiffness: 900,
  damping: 80,
  mass: 10,
};

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="h-12"></div>
      <div className="relative z-10 h-[20dvh] sm:h-[30dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-2xl font-light sm:text-5xl lg:text-6xl">
              <span>A </span>
              <TextLoop
                className="overflow-y-clip"
                transition={textLoopTransition}
                variants={textLoopVariants}
              >
                {heroContent.map((content, index) => (
                  <span key={index}>{content.role}</span>
                ))}
              </TextLoop>
              <br />
              <span className="flex items-center gap-2">
                <span>Who</span>
                <TextLoop
                  className="my-auto inline-block h-[2.25rem] sm:h-[3.25rem] lg:h-[4.25rem] overflow-hidden overflow-y-clip"
                  transition={textLoopTransition}
                  variants={textLoopVariants}
                >
                  {heroContent.map((content, index) => (
                    <span
                      key={index}
                      className={`relative mx-2 my-auto inline-block aspect-[1.5/1] h-[2.25rem] sm:h-[3.25rem] lg:h-[4.25rem] overflow-hidden rounded-full ${content.bgColor}`}
                    >
                      <span className="absolute inset-0 flex select-none items-center justify-center text-lg sm:text-3xl lg:text-4xl">
                        {content.emoji}
                      </span>
                    </span>
                  ))}
                </TextLoop>
                <span>to</span>
                <TextLoop
                  className="overflow-y-clip"
                  transition={textLoopTransition}
                  variants={textLoopVariants}
                >
                  {heroContent.map((content, index) => (
                    <span key={index}>{content.action}</span>
                  ))}
                </TextLoop>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/IMG_0919.JPG"
          alt="Hero image"
          className='aspect-video w-screen xl:w-[60%] object-cover object-center xl:rounded-2xl'
        />
      </div>
    </section>
  );
}

export default Hero;
