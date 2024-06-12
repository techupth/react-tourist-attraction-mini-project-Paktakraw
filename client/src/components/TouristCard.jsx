import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TouristCard(props) {
  const [copyLink, setCopyLink] = useState(false);

  const handleCopy = () => {
    setCopyLink(true);
    setTimeout(() => setCopyLink(false), 2000);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex w-[95%] mx-auto mt-[40px] gap-10 items-center justify-center p-3">
      <div>
        <img
          className="object-cover h-[200px] w-[350px] rounded-[20px]"
          src={props.imgSrc}
          alt="Image"
        />
      </div>
      <div>
        <a className="text-[20px] font-bold" href={props.link} target="_blank">
          {props.contentName}
        </a>
        <h4 className="text-gray-400">{props.description}</h4>
        <a
          className="text-blue-500 underline"
          href={props.link}
          target="_blank"
        >
          อ่านต่อ
        </a>
        <h4 className="text-gray-400">
          หมวด <span>{props.category.join(" ")}</span>
        </h4>
        <div className="flex gap-5 mt-5">
          <img
            className="object-cover h-[80px] w-[80px] rounded-[10px]"
            src={props.img1}
            alt="Image"
          />
          <img
            className="object-cover h-[80px] w-[80px] rounded-[10px]"
            src={props.img2}
            alt="Image"
          />
          <img
            className="object-cover h-[80px] w-[80px] rounded-[10px]"
            src={props.img3}
            alt="Image"
          />
        </div>
      </div>
      <CopyToClipboard text={props.link} onCopy={handleCopy}>
        <button className="mt-[200px]">
          <img className="w-[40px]" src="../src/icon/link.png" alt="" />
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default TouristCard;
