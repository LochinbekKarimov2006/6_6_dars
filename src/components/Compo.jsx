import { NavLink } from "react-router-dom"

function Compo({user}) {
  return (
    <div className="div-1">
    {user&&user.map((data)=>{
        return (
          <NavLink  key={data.id} to={`/hamasi/${data.id}`}>

          <div className=" div-2 bg-base-100  shadow-xl">
  <figure>
    <img
      src={data.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="p-[5%]">
    <h2 className=" texts">{data.title}</h2>
    <p className="text">{data.description}</p>
    <div className="card-actions justify-end">
      <button className="btn w-[30%]  btn-primary">button</button>
    </div>
  </div>
</div>
</NavLink>
        )
    })}
    </div>
  )
}
export default Compo