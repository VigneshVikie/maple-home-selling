import Image from "next/image";
import Header from "./Header";
import banner from "@/assets/banner.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-[url('../assets/banner-bg.png')] 
      relative
      bg-no-repeat	"
      >
        <Image src={banner} />
        <div
          className="absolute 
        text-center 
        inset-0 
        flex 
        flex-col 
        justify-center 
        items-center
        gap-4
        mb-56"
        >
          <h1
            className="font-semibold
          text-center 
          text-4xl"
          >
            Thinking of selling your home?
          </h1>
          <p
            className="font-medium
          text-xl	
          text-center
          w-3/5"
          >
            Get an instant estimate of your home’s value. You can quickly
            determine the estimated value of your home by answering a few quick
            questions.
          </p>
          <input
            type="text"
            placeholder="Enter your address...."
            className="w-3/6 
            p-4
            rounded-lg
            "
          />
          <button
            className="
          w-52
          h-12
          bg-cusclr
          rounded-full
          text-white
          font-medium"
          >
            Get Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
