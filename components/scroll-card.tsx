"use client";
import { ReactLenis } from "lenis/react";
import { JSX } from "react";
export default function ScrollCard(): JSX.Element {
  return (
    <ReactLenis root>
      <main>
        <article>
          <section className="text-white h-[80vh] md:h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Featured Project 👇
            </h1>
          </section>

          <section className="text-white h-[80vh] md:h-screen w-full bg-[#253031] grid place-content-center sticky top-0">
            <div className="flex flex-col md:flex-row gap-8 px-8 md:px-24 z-50">
              <img
                src="/ihgma.png"
                width={800}
                height={450}
                className="object-contain rounded-2xl overflow-hidden w-2/3"
                alt="linear board demo"
              />
              <div className="flex flex-col items-start gap-4 w-full md:w-1/3">
                <h1 className="2xl:text-7xl text-4xl font-semibold tracking-tight leading-[120%]">
                  Indonesian Hotel GM Association
                </h1>
                <h1 className="text-2xl">
                  We help IHGMA Launching their membership platform and
                  E-commerce with blogs to showcase their member's hotel,
                  activities and events.
                </h1>
              </div>
            </div>
          </section>

          <section className="bg-gray-300 text-black grid place-content-center h-[80vh] md:h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row gap-8 px-4 md:px-24">
              <div className="flex flex-col items-start gap-4 w-full md:w-1/3 md:text-right">
                <h1 className="2xl:text-7xl text-4xl font-semibold tracking-tight leading-[120%]">
                  In-n-Out Car Wash
                </h1>
                <h1 className="text-2xl">
                  We help In-n-Out reworks their company profile website
                </h1>
              </div>
              <img
                src="/innout.png"
                width={800}
                height={450}
                className="object-contain rounded-2xl overflow-hidden w-2/3"
                alt="linear board demo"
              />
            </div>
          </section>

          <section className="text-white h-[80vh] md:h-screen w-full bg-[#122932] grid place-content-center sticky top-0">
            <div className="flex flex-col md:flex-row gap-8 px-4 md:px-24 z-50">
              <img
                src="/cgm11.png"
                width={800}
                height={450}
                className="object-contain rounded-2xl overflow-hidden w-2/3"
                alt="linear board demo"
              />
              <div className="flex flex-col items-start gap-4 w-full md:w-1/3">
                <h1 className="2xl:text-7xl text-4xl font-semibold tracking-tight leading-[120%]">
                  CGM11 Computer Store
                </h1>
                <h1 className="text-2xl">
                  We help CGM11 Launching their media platform to show their
                  articles and social media post of their products reviews and
                  tech news.
                </h1>
              </div>
            </div>
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
