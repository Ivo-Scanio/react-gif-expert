
export const GifItem = ({title,url}) => {
  
    return (
    <>
     {url &&( <div className="card">
     <img src={url} alt={title}/>
     <p>{title}</p>
 </div>)}
   
   
    </>
  )
}
