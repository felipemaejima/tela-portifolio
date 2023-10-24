import LinkedinLogo from "./icons/linkedin";
import GithubLogo from "./icons/github";
import Presentation from "./presentation";
import Link from "./Link";

export default function FirstSection() {
  return (
    <div className="grid h-screen grid-cols-3 bg-[#0f1233] text-[#ffffff]">
      <Presentation />
      <div className="flex items-center">
        <Link
          href="https://github.com/felipemaejima?tab=repositories"
          className="mr-5 mt-[72px]"
        >
          <GithubLogo />
        </Link>
        <Link
          className="mt-[77px]"
          href="https://www.linkedin.com/in/luiz-felipe-maejima/"
        >
          <LinkedinLogo />
        </Link>
      </div>
    </div>
  );
}
