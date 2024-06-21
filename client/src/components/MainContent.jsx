import TouristCard from "./TouristCard";
import axios from "axios";
import { useState, useEffect } from "react";

function MainContent() {
  const [touristData, setTouristData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getTouristData = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    // console.log(result);
    setTouristData(result.data.data);
  };

  useEffect(() => {
    getTouristData();
  }, [searchText]);

  const getDescription = (description) => {
    if (description.length > 90) {
      return description.substring(0, 90) + "...";
    } else {
      return description.substring(0, 90);
    }
  };

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleTagClick = (tag) => {
    setSearchText((prevText) => {
      if (prevText) {
        return `${prevText} ${tag}`;
      } else {
        return tag;
      }
    });
  };

  return (
    <section className="mb-[40px] w-[100%] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-[60px] w-[90%]">
        <div>
          <h3 className="text-[30px] text-center">ค้นหาที่เที่ยว</h3>
          <input
            className="border-b-2 decorate-none w-[300px] mt-[30px] text-center md:w-[600px] focus:outline-none focus:placeholder-transparent md:text-[18px] lg:w-[800px] xl:w-[1100px]"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            value={searchText}
            onChange={handleSearchText}
          />
        </div>
      </div>
      <div className="w-[90%]">
        {touristData.map((item) => {
          return (
            <TouristCard
              key={item.eid}
              imgSrc={item.photos[0]}
              img1={item.photos[1]}
              img2={item.photos[2]}
              img3={item.photos[3]}
              contentName={item.title}
              category={item.tags}
              description={getDescription(item.description)}
              link={item.url}
              onTagClick={handleTagClick}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MainContent;
