export default function Link({ href, className, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className + " hover:mb-10"}
    >
      {children}
    </a>
  );
}
