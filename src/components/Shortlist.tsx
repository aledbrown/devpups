import { Heart, X } from "lucide-react";
import type { Puppy } from "../types";
import { Dispatch, SetStateAction } from "react";

export function Shortlist({
                            puppies,
                            liked,
                            setLiked,
                          }: {
  puppies: Puppy[];
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
}) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-medium">
        <span>Your shortlist</span>
        <Heart className="size-7 fill-pink-500 stroke-none" />
      </h2>
      <ul className="mt-4 flex flex-wrap gap-4">
        {puppies
          .filter((puppy) => liked.includes(puppy.id))
          .map((puppy) => (
            <ShortlistCard
              key={puppy.id}
              puppy={puppy}
              liked={liked}
              setLiked={setLiked}
            />
          ))}
      </ul>
    </div>
  )
}

type ShortlistProps = {
  puppy: Puppy;
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
};

function ShortlistCard({ puppy, liked, setLiked }: ShortlistProps) {
  function handleClick() {
    setLiked((prevLiked) => {
      return prevLiked.filter((id) => {
        return id !== puppy.id;
      });
    });
  }

  return (
    <li key={puppy.id} className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
      <img
        height={32}
        width={32}
        alt={puppy.name}
        className="aspect-square w-8 object-cover"
        src={puppy.imagePath}
      />
      <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
      <button onClick={handleClick} className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
        <X className="size-4 stroke-slate-400 group-hover:stroke-red-400" />
      </button>
    </li>
  );
}
