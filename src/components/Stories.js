import Image from "next/image";
import stories from "../../dummy_data/storiesData";

export default function Stories({ children }) {
  return (
    <div className="flex-1 h-[94%] xl:py-4">
      <div className="px-8">{children}</div>
      <div className="flex flex-col h-full overflow-y-scroll no-scrollbar px-8">
        {stories.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-2 my-8 text-gray-700">
              <Image src={item.image} className="w-full h-[15rem]" />
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
