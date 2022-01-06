import type { NextPage } from "next";

const Tailwind: NextPage = () => {
  return (
    <div>
      <header className="bg-gray10 h-52 fixed top-0 left-0 right-0">123</header>
      <nav className="bg-gray05 mt-52 fixed left-0 lg:w-80 md:w-60 sm:w-40 min-h-screen">
        <div className="mt-4 p-4">
          <p className="text-yellow my-4 text-normal font-normal">
            1. 이용 약관
          </p>
          <p className="text-gray10 my-4 text-normal font-normal">
            2. 본 서비스
          </p>
          <p className="text-gray10 my-4 text-normal font-normal">
            3. 서비스 이용 계약의 체결
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Tailwind;
