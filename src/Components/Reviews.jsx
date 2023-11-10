import Image from "next/image";
import quoteTop from "@/assets/quotation-top.png";
import quoteBot from "@/assets/quotation-bottom.png";

const Reviews = () => {
  return (
    <div
      className="
      flex 
    flex-col 
    items-center 
    gap-2
    pt-20
    h-[640px]
    bg-reviewsclr"
    >
      <h1
        className="text-2xl	
      font-bold"
      >
        The Canadian Home
      </h1>
      <h3 className="font-bold">
        What customers say about the The Canadian Home experience
      </h3>
      <div
        className="
      h-full
      w-full
      overflow-x-scroll
      flex
      gap-10
      items-center
      "
        id="child"
      >
        <div
          className="flex 
        items-center
        h-[300px]
        w-[680px]
        ml-40
        "
        >
          <div
            className="
          bg-white
          h-[271px]
          w-[660px]
          rounded-3xl	
          relative
          flex
          flex-col
          gap-10
          items-center
          justify-center
          text-center
          "
          >
            <div
              className="flex
             gap-2
             top-0
             left-10
             mt-[-22px]
            absolute
             "
            >
              <Image src={quoteTop} />
              <Image src={quoteTop} />
            </div>
            <p style={{ color: "#606060", width: "600px" }}>
              The Canadian Home is absolutely amazing. It successfully surpasses
              all the other apps in this area. Their Chat function is what have
              been missing from online home search. The experts are always
              available with correct answers to anything.
            </p>
            <h2 style={{ fontSize: "18px", fontWeight: "700" }}>John Brown</h2>
            <div
              className="flex
              gap-2
             bottom-0
             right-10
             mb-[-22px]
            absolute"
            >
              <Image src={quoteBot} />
              <Image src={quoteBot} />
            </div>
          </div>
        </div>
        <div
          className="flex 
        gap-20
        items-center
        h-[300px]
        w-[680px]"
        >
          <div
            className="
          bg-white
          rounded-3xl	
          h-[271px]
          w-[660px]
          relative
          flex
          flex-col
          gap-10
          items-center
          justify-center
          text-center
          "
          >
            <div
              className="flex
              gap-2
             top-0
             left-10
             mt-[-22px]
            absolute
             "
            >
              <Image src={quoteTop} />
              <Image src={quoteTop} />
            </div>
            <p style={{ color: "#606060", width: "600px" }}>
              The Canadian Home is absolutely amazing. It successfully surpasses
              all the other apps in this area. Their Chat function is what have
              been missing from online home search. The experts are always
              available with correct answers to anything.
            </p>
            <h2 style={{ fontSize: "18px", fontWeight: "700" }}>John Brown</h2>
            <div
              className="flex
              gap-2
             bottom-0
             right-10
             mb-[-22px]
            absolute"
            >
              <Image src={quoteBot} />
              <Image src={quoteBot} />
            </div>
          </div>
        </div>
        <div
          className="flex 
        gap-20
        items-center
        h-[300px]
        w-[680px]
        relative
        "
        >
          <div
            className="
            bg-white
          h-[271px]
          w-[660px]
          rounded-3xl	
          relative
          flex
          flex-col
          gap-10
          items-center
          justify-center
          text-center
          "
          >
            <div
              className="flex
              gap-2
             top-0
             left-10
             mt-[-22px]
            absolute"
            >
              <Image src={quoteTop} />
              <Image src={quoteTop} />
            </div>
            <p style={{ color: "#606060", width: "600px" }}>
              The Canadian Home is absolutely amazing. It successfully surpasses
              all the other apps in this area. Their Chat function is what have
              been missing from online home search. The experts are always
              available with correct answers to anything.
            </p>
            <h2 style={{ fontSize: "18px", fontWeight: "700" }}>John Brown</h2>
            <div
              className="flex
              gap-2
             bottom-0
             right-10
             mb-[-22px]
            absolute"
            >
              <Image src={quoteBot} />
              <Image src={quoteBot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
