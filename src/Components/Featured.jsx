import Image from "next/image";
import leftArrow from "@/assets/left-arrow.png";
import rightArrow from "@/assets/right-arrow.png";
import feature1 from "@/assets/feature1.png";
import feature2 from "@/assets/feature2.png";
import feature3 from "@/assets/feature3.png";
import feature4 from "@/assets/feature4.png";
import feature5 from "@/assets/feature5.png";
import feature6 from "@/assets/feature6.png";

const Featured = () => {
  return (
    <div
      className="bg-featureclr
    h-64
    flex
    items-center
    justify-center
    flex-col
    gap-10"
    >
      <h2
        className="text-2xl	
      font-bold	"
      >
        Featured On
      </h2>
      <div
        className="flex 
      items-center 
      justify-center 
      gap-8 "
      >
        <Image src={leftArrow} className="cursor-pointer" />
        <Image src={feature1} />
        <Image src={feature2} />
        <Image src={feature3} />
        <Image src={feature4} />
        <Image src={feature5} />
        <Image src={feature6} />
        <Image src={rightArrow} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Featured;
