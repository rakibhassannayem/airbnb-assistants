import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <Link href={"/"} className="">
            <Image src="/google.png" alt="logo" height={25} width={125} />
          </Link>
          <p className="text-gray-600 my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Nullam dictum aliquet accumsan porta lectus ridiculus in
            <br />
            mattis. Netus sodales in volutpat ullamcorper amet
            <br />
            adipiscing fermentum.
          </p>

          <div className="flex items-center gap-8 mt-5">
            <a href={"#"}>
              <FaTwitter size={20} />
            </a>
            <a href={"#"}>
              <FaFacebookF size={20} />
            </a>
            <a href={"#"}>
              <FaInstagram size={20} />
            </a>
            <a href={"#"}>
              <FaGithub size={20} />
            </a>
          </div>
        </aside>
        <nav className="gap-5 text-gray-900">
          <h6 className="footer-title font-bold opacity-100">Company</h6>
          <a className="link link-hover font-medium">Feature</a>
          <a className="link link-hover font-medium">About</a>
          <a className="link link-hover font-medium">Works</a>
          <a className="link link-hover font-medium">Career</a>
        </nav>
        <nav className="gap-5 text-gray-900">
          <h6 className="footer-title font-bold opacity-100">Help</h6>
          <a className="link link-hover font-medium">Customer Support</a>
          <a className="link link-hover font-medium">Delivery Details</a>
          <a className="link link-hover font-medium">Terms & Conditions</a>
          <a className="link link-hover font-medium">Privacy Policy</a>
        </nav>
        <nav className="gap-5 text-gray-900">
          <h6 className="footer-title font-bold opacity-100">Resources</h6>
          <a className="link link-hover font-medium">Free eBooks</a>
          <a className="link link-hover font-medium">Development Tutorial</a>
          <a className="link link-hover font-medium">How to - Blog</a>
          <a className="link link-hover font-medium">Youtube Playlist</a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-[#230B41] text-white p-4">
        <aside>
          <p>
            © {new Date().getFullYear()} Copyright, All right reserved by XYz
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
