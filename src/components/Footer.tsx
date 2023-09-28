import { BsFillEnvelopeFill, BsFacebook, BsInstagram } from "react-icons/bs";

const linkClassName =
  "text-[#fad895] hover:text-[#fffbf5] focus:text-[#fffbf5]";

const iconClassName = "w-8 h-auto";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const Footer = () => (
  <div className="flex gap-4">
    <a
      href="mailto:josephdemartiniart@gmail.com"
      title="Email Joseph De Martini Art"
      className={linkClassName}
      {...externalLinkProps}
    >
      <BsFillEnvelopeFill className={iconClassName} />
    </a>
    <a
      href="https://www.facebook.com/josephdemartiniart"
      title="Follow Joseph De Martini Art on Facebook"
      className={linkClassName}
      {...externalLinkProps}
    >
      <BsFacebook className={iconClassName} />
    </a>
    <a
      href="https://www.instagram.com/josephdemartiniart"
      title="Follow @josephdemartiniart on Instagram"
      className={linkClassName}
      {...externalLinkProps}
    >
      <BsInstagram className={iconClassName} />
    </a>
  </div>
);

export default Footer;
