import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060F1F] px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-black text-[#4FC3F7]">404</h1>
        <p className="text-lg text-white/70">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-xl bg-[#4FC3F7] text-white font-bold hover:brightness-110 transition-all"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
