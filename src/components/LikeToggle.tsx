import { Heart, LoaderCircle } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Puppy } from "../types";

type LikeToggleProps = {
  id: Puppy['id'];
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
};

export function LikeToggle({ id, liked, setLiked }: LikeToggleProps) {
  
  function handleClick() {
    setPending(true);
    setTimeout(() => {
      if (liked.includes(id)) {
        setLiked(liked.filter(pupId => pupId !== id));
      } else {
        setLiked([...liked, id]);
      }
      setPending(false);
    }, 1500);
  }

  const [pending, setPending] = useState(false);

  return (
    <button className="group flex items-center gap-1" onClick={handleClick}>
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            liked.includes(id)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  );
}
