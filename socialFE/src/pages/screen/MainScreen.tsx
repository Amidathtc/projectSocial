import Blog from "../../components/private/Blog";
import Mind from "../../components/private/Mind";

const MainScreen = () => {
  return (
    <div className="w-full h-[100%] mt-[68px]  max-sm:w-full ">
      <div className="w-full h-full justify-between  flex ">
        <div className="max-sm:hidden max-md:hidden h-full ">
          <Blog />
          <Blog stick="sticky top-[80px] z-[-50]"/>
        </div>
        <div className="min-w-[580px] max-sm:min-w-[300px] px-2 max-sm:ml-[5px] mt-2 ">
          <Mind />
          <div className="h-[300vh]  w-[20px] ml-[300px]">
          </div>
        </div>
        <div className="max-h-[460px] w-[290px] max-sm:hidden mr-11 ">
          <Blog stick="sticky top-[1200px] z-[-50]"/>
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
