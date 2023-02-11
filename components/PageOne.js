import { selectToggle } from "@/reducers/autoToggleSlice/autoToggleSlice";
import { useSelector } from "react-redux";
import LeftBar from "./LeftBar";
import TextProp from "./props/TextProp";
import ScrollComp from "./ScrollComp";


const LeftI=[
  {
    id:1,
    title:`I`
  },
  {
    id:2,
    title:`I`
  },
  {
    id:3,
    title:`I`
  },
  {
    id:4,
    title:`I`
  },
  {
    id:5,
    title:`I`
  },
  {
    id:6,
    title:`I`
  }
]


const PageOne = () => {

  

    return (
     <div> 
      <LeftBar/>
     <div className="flex flex-col items-center
         text-center bg-yellow-400 z-[-10]"> 
       <div className="h-[400rem] w-[60%]
         md:mt-[-3rem] lg:mt-[0rem]">
           <TextProp
             title={`Welcome To Nocurves`}
             titleclassN={`
               text-6xl font-bold`}
             details={`We dont do curves around here!`}  
             detailclassN={`text-lg`}

             tdivclassN={`pt-[8rem] lg:pt-[22rem]
               space-y-11 md:space-y-8 lg:space-y-11`}
           />
           {LeftI.map((letter)=>(
           <div key={letter.id} className="z-[-10]"> 
            <TextProp title={letter.title} 
              titleclassN={`text-[9rem] font-bold
              `}
              tdivclassN={`mt-[44rem] pr-[18rem] sm:pr-[0rem]
                 sm:flex sm:justify-center sm:pl-4`}
            />
           </div>
           ))}

       </div> 
       <div className="flex justify-center">
        <div className="w-[50%]">
          <TextProp
              title={`Decided to go crazy with the`}
              details={`animations ;)`}
              detailclassN={`text-5xl font-bold italic md:text-3xl lg:text-5xl`}
              titleclassN={`text-4xl pb-[2rem] leading-[5rem] font-medium
                md:text-2xl lg:text-4xl lg:leading-[5rem]`}
              tdivclassN={`pb-[5rem]`}  
          />
         </div> 
       </div>   
     </div> 
      <ScrollComp/>
     </div>  
    );
}

export default PageOne;