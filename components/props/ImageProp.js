
import Image from "next/image";

const ImageProp = () => {
    return (
       <div className={idivclassN}>
         <Image
           src={isrc}
           className={imgclassN}
           height={iht}
           weight={iwd}
           alt={ialt}
         />
       </div> 
    );
}

export default ImageProp;