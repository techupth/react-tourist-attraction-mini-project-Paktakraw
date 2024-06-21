import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TouristCard(props) {
  const [copyLink, setCopyLink] = useState(false);

  const handleCopy = () => {
    setCopyLink(true);
    setTimeout(() => setCopyLink(false), 2000);
    alert("Copied to clipboard!");
  };

  const handleTagClick = (tag) => {
    props.onTagClick(tag);
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto mt-[60px] gap-10 items-center justify-center p-3 xl:max-w-[1000px]">
      <div className="lg:flex lg:gap-10">
        <div>
          <img
            className="object-cover mx-auto h-[200px] w-[350px] rounded-[20px] md:h-[300px] md:w-[500px] lg:h-[250px] lg:w-[550px] xl:h-[300px] xl:w-[600px]"
            src={props.imgSrc}
            alt="Image"
          />
        </div>
        <div>
          <div className="flex justify-center items-center mt-[25px] sm:mt-[25px] md:mt-[25px] lg:justify-start lg:mt-0">
            <a
              className="text-[20px] font-bold"
              href={props.link}
              target="_blank"
            >
              {props.contentName}
            </a>
          </div>
          <h4 className="text-gray-400">{props.description}</h4>
          <a
            className="text-blue-500 underline"
            href={props.link}
            target="_blank"
          >
            อ่านต่อ
          </a>
          <h4 className="text-gray-400">
            หมวด{" "}
            {props.category.map((tag, index) => (
              <span
                key={index}
                className="cursor-pointer hover:text-black"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
                {index < props.category.length - 1 && " "}
              </span>
            ))}
          </h4>{" "}
          <div className="flex item-center justify-around mt-5">
            <img
              className="object-cover h-[80px] w-[80px] rounded-[10px] md:h-[120px] md:w-[120px] lg:w-[80px] lg:h-[80px] xl:w-[120px] xl:h-[120px]"
              src={props.img1}
              alt="Image"
            />
            <img
              className="object-cover h-[80px] w-[80px] rounded-[10px] md:h-[120px] md:w-[120px] lg:w-[80px] lg:h-[80px] xl:w-[120px] xl:h-[120px]"
              src={props.img2}
              alt="Image"
            />
            <img
              className="object-cover h-[80px] w-[80px] rounded-[10px] md:h-[120px] md:w-[120px] lg:w-[80px] lg:h-[80px] xl:w-[120px] xl:h-[120px]"
              src={props.img3}
              alt="Image"
            />
          </div>
        </div>
      </div>
      <div>
        <CopyToClipboard text={props.link} onCopy={handleCopy}>
          <button className="bg-sky-500 hover:bg-sky-700 px-[20px] py-[10px] rounded-[10px] xl:w-[300px] xl:py-[15px]">
            {/* <img className="w-[40px]" src="../src/icon/link.png" alt="" /> */}
            <p className="text-white">Copy Link To Clipboard</p>
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default TouristCard;
