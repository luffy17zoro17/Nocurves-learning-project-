


const InputProp = ({inplaceholder,inclassN,inDivclassN})=> {
    return (
      <div className={inDivclassN}>
        <input 
          placeholder={inplaceholder}
          className={inclassN}
        />
      </div>  
    );
}

export default InputProp;