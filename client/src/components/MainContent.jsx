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
    console.log(result);
    setTouristData(result.data.data);
  };

  useEffect(() => {
    getTouristData();
  }, [searchText]);

  const handleSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <section className="mb-[40px]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[1400px] mx-auto">
          <h3 className="text-[18px]">ค้นหาที่เที่ยว</h3>
          <input
            className="border-b-2 decorate-none w-[1400px] mt-[30px] text-center focus:outline-none focus:placeholder-transparent"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            value={searchText}
            onChange={handleSearchText}
          />
        </div>
      </div>
      <div>
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
              description={
                item.description.substring(0, 100) +
                (item.description.length > 100 ? "..." : "")
              }
              link={item.url}
            />
          );
        })}
      </div>
    </section>
  );
}

export default MainContent;
