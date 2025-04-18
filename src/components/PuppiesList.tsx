import type { Puppy } from "../types";
import { LikeToggle } from "./LikeToggle";
import { Dispatch, SetStateAction } from "react";

export function PuppiesList({
  puppies,
  liked,
  setLiked,
}: {
  puppies: Puppy[];
  liked: number[];
  setLiked: Dispatch<SetStateAction<number[]>>;
}) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies.map((puppy) => (
        <PuppyCard
          key={puppy.id}
          puppy={puppy}
          liked={liked}
          setLiked={setLiked}
        />
      ))}
    </ul>
  );
}

type PuppyCardProps = {
  puppy: Puppy;
  liked: number[];
  setLiked: Dispatch<SetStateAction<number[]>>;
};

function PuppyCard({ puppy, liked, setLiked }: PuppyCardProps) {
  return (
    <li
      key={puppy.id}
      className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
    >
      <img
        className="aspect-square object-cover"
        alt={puppy.name}
        src={puppy.imagePath}
      />
      <div className="gap flex items-center justify-between p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{puppy.name}</p>
          <span className="text-slate-300">·</span>
          <p className="text-slate-500">{puppy.trait}</p>
        </div>
        <LikeToggle id={puppy.id} liked={liked} setLiked={setLiked} />
      </div>
    </li>
  );
}
