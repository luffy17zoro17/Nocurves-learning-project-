


const TextProp = ({title,details,detailclassN,titleclassN,tdivclassN}) =>{
    return (
      <div className={tdivclassN}>
        <h1 className={titleclassN}>{title}</h1>
        <p className={detailclassN}>{details}</p>
      </div>  
    );
}

export default TextProp;