"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import {
  AnimatedBeam,
  Circle,
} from "@/components/Animations/AnimatedBeam/AnimatedBeam";
import img2 from "../../../assets/project-management.png";
import logoImg from "../../../assets/logo.png";

export const Beam = ({ className }) => {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  return (
    <div
      className={cn(
        "relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden p-10 md:shadow-xl",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <img src={img2} alt="logo" className="scale-125" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <img src={logoImg} alt="logo" className="scale-150" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <img
              src="https://img.icons8.com/plasticine/100/react.png"
              alt="logo"
            />
          </Circle>
          <Circle className="p-2" ref={div2Ref}>
            <img
              src="https://img.icons8.com/color/48/typescript.png"
              alt="logo"
            />
          </Circle>
          <Circle className="p-2" ref={div4Ref}>
            <img
              src="https://img.icons8.com/color/48/tailwindcss.png"
              alt="logo"
            />
          </Circle>
          <Circle className="p-2" ref={div3Ref}>
            <img
              src="https://img.icons8.com/ios-filled/50/github.png"
              alt="logo"
            />
          </Circle>
          <Circle className="p-2" ref={div5Ref}>
            <img
              src="https://img.icons8.com/fluency/48/node-js.png"
              alt="logo"
            />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
};
