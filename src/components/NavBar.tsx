import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar: React.FC = () => {
  const router = useRouter();

  const redirect = (path: string) => {
    router.push(path);
  };
  return (
    <nav className="m-5 border-b-2 border-grey-600">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a className="text-white text-2xl font-bold">
            <Image src="/next.svg" alt="logo" width={100} height={100} />
          </a>

          <div className="hidden md:flex space-x-4">
            <a
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => redirect("/")}
            >
              Home
            </a>

            <a
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => redirect("/about")}
            >
              About
            </a>

            <a
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => redirect("/contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};