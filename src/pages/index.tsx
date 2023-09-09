import { useState } from "react";
import Link from "next/link";
import { Heading, Text } from "@/components";

const Home = () => {
  const [text] = useState([
    "convert design into modern UI",
    "build interactive UI using React",
    "develop websites using Next.js",
    "develop server using Node.js",
  ]);

  return (
    <section id="intro" className="section p-5 h-full">
      <div className="flex items-center">
        <div className="py-5 md:py-10">
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold">
            <p>
              Hi, I&apos;m <mark> MERN stack</mark> a <mark>passionate</mark>{" "}
              software developer.
            </p>
          </h1>

          <div className="mt-3  flex justify-center overflow-hidden">
            <div className="text-[17px] md:text-2xl">
              <div className=" flex flex-col">
                {text?.map((element) => (
                  <div key={element} className="text-[17px] md:text-2xl">
                    {" "}
                    <Heading
                      restStyle="!inline"
                      title={element?.split(" ")?.at(0)}
                    />{" "}
                    <Text
                      restStyle="!inline"
                      title={element.split(" ").slice(1).join(" ")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Text restStyle="mt-3 mb-10 text-gray-500"
                      title=" Stick around to see some of my work."
                    />
          <div>
            <Link
              href="/about"
              className="btn bg-blue-500 text-white p-4 rounded"
              aria-label="Latest projects"
            >
              See my latest projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
