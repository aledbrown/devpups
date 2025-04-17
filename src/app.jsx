import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <main>
          {/* more to come */}
          <Main />
        </main>
      </Container>
    </PageWrapper>
  );
}

function Main() {
  return (
    <>
      {/* Search & Shortlist */}
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        {/* Search */}
        <div>
          <label htmlFor="search" className="font-medium">
            Search for a character trait
          </label>
          <div className="mt-2 flex items-center gap-4">
            <input
              placeholder="playful..."
              name="search"
              id="search"
              type="text"
              className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            />
            <button className="inline-block rounded bg-cyan-300 px-4 py-2 !pr-3 !pl-2.5 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-delete"
              >
                <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
                <path d="m12 9 6 6" />
                <path d="m18 9-6 6" />
              </svg>
            </button>
          </div>
        </div>
        {/* Shortlist */}
        <div>
          <h2 className="flex items-center gap-2 font-medium">
            <span>Your shortlist</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </h2>
          <ul className="mt-4 flex flex-wrap gap-4">
            <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
              <img
                height={32}
                width={32}
                alt="Chase"
                className="aspect-square w-8 object-cover"
                src="/images/2.jpg"
              />
              <p className="px-3 text-sm text-slate-800">Chase</p>
              <button className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </li>
            <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
              <img
                height={32}
                width={32}
                alt="Leia"
                className="aspect-square w-8 object-cover"
                src="/images/3.jpg"
              />
              <p className="px-3 text-sm text-slate-800">Leia</p>
              <button className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Puppies list */}
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
          <img
            className="aspect-square object-cover"
            alt="Frisket"
            src="/images/1.jpg"
          />
          <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Frisket</p>
              <span className="text-slate-300">·</span>
              <p className="text-slate-500">Mother of all pups</p>
            </div>
            <button className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </li>
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
          <img
            className="aspect-square object-cover"
            alt="Chase"
            src="/images/2.jpg"
          />
          <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Chase</p>
              <span className="text-slate-300">·</span>
              <p className="text-slate-500">Very good boi</p>
            </div>
            <button className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart fill-pink-500 stroke-none"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </li>
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
          <img
            className="aspect-square object-cover"
            alt="Leia"
            src="/images/3.jpg"
          />
          <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Leia</p>
              <span className="text-slate-300">·</span>
              <p className="text-slate-500">Enjoys naps</p>
            </div>
            <button className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart fill-pink-500 stroke-none"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </li>
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
          <img
            className="aspect-square object-cover"
            alt="Pupi"
            src="/images/4.jpg"
          />
          <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Pupi</p>
              <span className="text-slate-300">·</span>
              <p className="text-slate-500">Loves cheese</p>
            </div>
            <button className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </li>
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
          <img
            className="aspect-square object-cover"
            alt="Russ"
            src="/images/5.jpg"
          />
          <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Russ</p>
              <span className="text-slate-300">·</span>
              <p className="text-slate-500">Ready to save the world</p>
            </div>
            <button className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </li>
        <li className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5">
          <img
            className="aspect-square object-cover"
            alt="Yoko"
            src="/images/6.jpg"
          />
          <div className="gap flex items-center justify-between p-4 text-sm">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Yoko</p>
              <span className="text-slate-300">·</span>
              <p className="text-slate-500">Ready for anything</p>
            </div>
            <button className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart stroke-slate-200 group-hover:stroke-slate-300"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </button>
          </div>
        </li>
      </ul>
      {/* New Puppy form */}
      <div className="mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5">
        <form className="mt-4 flex w-full flex-col items-start gap-4">
          <div className="grid w-full gap-6 md:grid-cols-3">
            <fieldset className="flex w-full flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="name"
                type="text"
                name="name"
              />
            </fieldset>
            <fieldset className="flex w-full flex-col gap-1">
              <label htmlFor="trait">Personality trait</label>
              <input
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="trait"
                type="text"
                name="trait"
              />
            </fieldset>
            <fieldset
              disabled=""
              className="col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50"
            >
              <label htmlFor="avatar_url">Profile pic</label>
              <input
                className="max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                id="avatar_url"
                type="file"
                name="avatar_url"
              />
            </fieldset>
          </div>
          <button
            className="mt-4 inline-block rounded bg-cyan-300 px-4 py-2 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            type="submit"
          >
            Add puppy
          </button>
        </form>
      </div>
    </>
  )
}
