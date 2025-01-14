import { TextRevealByScroll } from "../Animations/TextRevealByScroll";
import { cn } from "../Lib/Utils";

const Cover = () => {
  return (
    <div className="flex justify-center items-center h-fit w-full relative">
      <div className="pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div
            className={cn(
              "rounded-lg w-full h-[500px]",
              "bg-white/50 dark:bg-black/50 backdrop-blur-sm",
              "flex items-center justify-center",
              "pointer-events-auto"
            )}
          >
            <TextRevealByScroll text="Magic UI will change the way you design." />
          </div>
        </div>
      </div>
      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
};

export default Cover;
