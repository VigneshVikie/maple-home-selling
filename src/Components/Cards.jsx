import Image from "next/image";
import mobile from "@/assets/mobile.png";
import agents from "@/assets/agents.png";
import notification from "@/assets/notification.png";
import professionalPhotos from "@/assets/professional-photos.png";

const Cards = () => {
  return (
    <div
      className="mt-24 
    flex 
    items-center 
    justify-center
    gap-10
    h-[630px]"
    >
      <div
        className="w-96 
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-4"
      >
        <Image src={mobile} />
        <h1
          className="text-xl	 
          font-bold	
          "
        >
          Visibility
        </h1>
        <p
          className="text-base	
        font-medium
       "
          style={{ color: "#8B8B8B", textAlign: "center" }}
        >
          Your house will appear as a ‘featured listing’ on the home page,
          ensuring your house gets the maximum visibility
        </p>
      </div>
      <div
        className="w-96 
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-4"
      >
        <Image src={agents} />
        <h1
          className="text-xl	
          font-bold	"
        >
          Real Local Agents
        </h1>
        <p
          className="text-base	
        font-medium
       "
          style={{ color: "#8B8B8B", textAlign: "center" }}
        >
          You are backed by a team of Real estate agents who know the market in
          and out. With their market insights, experience and sound data, your
          home will sell in no time.
        </p>
      </div>
      <div
        className="w-96 
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-4"
      >
        <Image src={notification} />
        <h1
          className="text-xl	
        font-bold	
        "
        >
          Email & Notification
        </h1>
        <p
          className="text-base	
        font-medium
       "
          style={{ color: "#8B8B8B", textAlign: "center" }}
        >
          Users get instant notifications about new listings, price hikes, price
          drops, and neighborhood alerts. We get your property shown to people
          who are actively looking and eager to buy.
        </p>
      </div>
      <div
        className="w-96 
      flex 
      flex-col 
      items-center 
      justify-center 
      gap-4"
      >
        <Image src={professionalPhotos} />
        <h1
          className="text-xl	
        font-bold	
        "
        >
          Professional photos
        </h1>
        <p
          className="text-base	
        font-medium
       "
          style={{ color: "#8B8B8B", textAlign: "center" }}
        >
          With professional staging and photos, we make your house reach the
          best of its abilities and show it off because looks are what sell.
        </p>
      </div>
    </div>
  );
};

export default Cards;
