import HeaderTitle from "./_components/TitleBox";
import List from "./_components/List";
import Input from "./_components/Input";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center ">
      <div className="bg-[#DAD2D8] flex flex-row justify-start items-center h-9 w-8/12 rounded-md mb-1 px-4">
        <HeaderTitle />
      </div>
      <div className="bg-[#DAD2D8] flex flex-col justify-start items-start px-4 py-4 h-1/2 w-8/12 rounded-md">
        <Input/>
        <List />
      </div>
    </div>
  );
}
