import ButtonElement from "../_components/Pure-Elements/ButtonElement";
import InputElement from "../_components/Pure-Elements/InputElements";

export default function Advanced() {


  return (
    <div className="h-full flex flex-col justify-center items-center ">
      <div className="bg-[#DAD2D8] flex flex-row justify-start items-center h-9 w-8/12 rounded-md mb-1 px-4">
        Register
      </div>
      <div className="bg-[#DAD2D8] flex flex-col justify-center items-center px-4 py-4 h-1/2 w-8/12 rounded-md gap-3">
        <InputElement title="Email" />
        <InputElement title="Password" />

        <ButtonElement title="Register" buttonProps={{
          className: 'bg-red-400'
        }}
        />
      </div>
    </div>

  )
}
