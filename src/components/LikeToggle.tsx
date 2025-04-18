import { Heart } from "lucide-react";
import * as React from "react";

export function LikeToggle() {
  const [isLiked, setIsLiked] = React.useState(false);
  
  
  function handleClick() {
    setIsLiked(!isLiked);
  }
  
  return (
    <button className="group" onClick={handleClick}>
      <Heart className={
        isLiked
          ? "fill-pink-500 stroke-none"
          : "stroke-slate-200 group-hover:stroke-slate-300"
      }
      />
    </button>
  );
}
