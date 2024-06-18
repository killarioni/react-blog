import "./header.css";
import image from "../images"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="/images/header.jpg  " alt="" />
    </div>
  );
}
