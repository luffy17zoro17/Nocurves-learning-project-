import IconProp from "./props/IconProp";
import SouthIcon from '@mui/icons-material/South';
import { selectToggle } from "@/reducers/autoToggleSlice/autoToggleSlice";
import { useSelector } from "react-redux";




const ScrollComp = () => {

    const toggleValue = useSelector(selectToggle);
    return (
      <div className={`fixed flex justify-center bottom-[5rem] w-screen
            md:bottom-[1rem]
         ${toggleValue===0 ? `opacity-100` : `opacity-0`}`}>
       <div>
          <IconProp 
            icon={<SouthIcon className="text-[3rem]"/>}
            icoclassN={`border-y border-x-[0.3rem]
             bg-green-500 border-dashed
              animate-bounce border-black`}
          />
       </div>
      </div>  
    );
}

export default ScrollComp