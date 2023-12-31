export default function Link({ href, className, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className + " relative hover:bottom-5"}
    >
      {children}
    </a>
  );
}
