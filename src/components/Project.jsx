export default function Project({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-[400px] h-[300px] flex items-center justify-center my-[30px] cursor-pointer"
    >
      {children}
    </a>
  );
}
