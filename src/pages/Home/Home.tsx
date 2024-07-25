import CardSlider from "../../components/global/CardSlider";

export default function Home() {
  return (
    <main className="py-[50px]">
      <div className="content_container">
        <div className="w-[95%] mx-auto">
          <div className="flex gap-3 justify-between items-center h-[200px]">
            <div className="h-full flex-1 bg-loaderBg rounded-2xl"></div>
            <div className="h-full flex-1 bg-loaderBg rounded-2xl"></div>
            <div className="h-full flex-1 bg-loaderBg rounded-2xl"></div>
          </div>
          <div className="flex gap-3 justify-between items-center h-[200px] mt-3">
            <div className="h-full flex-1 bg-loaderBg rounded-2xl"></div>
            <div className="h-full flex-1 bg-loaderBg rounded-2xl"></div>
          </div>
          <div className="flex gap-3 justify-between items-center h-[150px] mt-3">
            <div className="h-full flex-1 bg-loaderBg rounded-2xl flex justify-center items-center text-inputPlaceholder text-[18px] font-mainBold ">
              რეკლამა
            </div>
          </div>
        </div>
        <section className="mt-10">
          <div className="mt-3">
            <h1 className="text-title text-[18px] font-mainBold tracking-widest">
              ახალი სტატიები
            </h1>
            <CardSlider />
          </div>{" "}
          <div className="mt-6">
            <h1 className="text-title text-[18px] font-mainBold tracking-widest">
              ახალი სტატიები
            </h1>
            <CardSlider />
          </div>{" "}
          <div className="mt-6">
            <h1 className="text-title text-[18px] font-mainBold tracking-widest">
              ახალი სტატიები
            </h1>
            <CardSlider />
          </div>
        </section>
      </div>
    </main>
  );
}
