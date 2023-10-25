import Link from "./Link";
import Title from "./Title";
import MailIcon from "./icons/envelope";
import WhatsappIcon from "./icons/whatsapp";

export default function Contato() {
  return (
    <div className="text-center">
      <Title>Entre em Contato</Title>
      <p>Você pode entrar em contato comigo pelos seguintes canais: </p>
      <div className="grid grid-cols-2 m-[50px]">
        <Link
          href="https://mail.google.com/mail/?view=cm&to=felipemaejima@gmail.com"
          className="flex justify-center items-center"
        >
          <MailIcon />
        </Link>
        <Link
          href="https://api.whatsapp.com/send?phone=5511944536476"
          className="flex justify-center items-center"
        >
          <WhatsappIcon />
        </Link>
      </div>
    </div>
  );
}
