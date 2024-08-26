import { useEffect } from "react";
import { useState } from "react";

const Home = () => {

    const [search, setSearch] = useState('')
    const [ meals, setMeals] = useState([])
    const [error, setError] = useState('')

    const loteData = async()=>{
        try{
            const res =  await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json()
              setMeals(data.meals)
              setError('')
        }catch{
        setError( 'No Eat Fond')
        }
  }


  const handle = (e)=>{
    console.log(e.target.value);
    setSearch(e.target.value)
    
}

useEffect(()=>{
 loteData()
},[ search])


    return (
        <div>
    
        <div>
            <h1 className=" text-4xl  text-center text-lime-500 font-extrabold" > Are You Looking For Food <span className=" text-5xl text-white" >?</span> </h1>
            <p className=" text-4xl  text-center text-lime-500 font-bold mt-4" > Than This is The Favorite Food <span className=" text-5xl text-white" >Search </span> For You </p>
        </div>

        <div className=" flex justify-center  mt-10"  >
        <input onBlur={handle} className="rounded-se-3xl rounded-bl-3xl w-96 h-16 border-s-2 border-e-2 border-t-2 border-blue-500 px-4 font-bold" type="text" placeholder="   🔎 Search..." /> 
        <button onClick={()=> loteData()}  className="rounded-se-3xl rounded-bl-3xl bg-white p-3 font-extrabold text-black h-16 border-s-2 border-e-2 border-t-2 border-blue-500" > Search  </button>
        </div>

        <div className=" grid lg:grid-cols-3 grid-cols-1  gap-3  mt-4 max-w-7xl mx-auto " >
            {
              meals?.length > 0 && !error ? meals.map((meal)=>(
                    <div className=" border-2 border-blue-500 p-3 bg-white rounded-lg" key={meal.idMeal} > 
                       <img className=" h-[400px] rounded-3xl shadow-2xl shadow-red-500 " src={meal.strMealThumb} alt="" />
                       <h1 className=" text-center text-black mt-3 font-extrabold text-2xl" > {meal.strMeal.slice(0,25)} </h1>
                       <h1 className=" text-center text-black mt-3 font-bold text-sm"  > {meal.strInstructions.slice(0,150)} </h1>

                     </div>
                )) 
                
                :

                <h5 className=" text-center mx-auto text-3xl bg-white rounded-xl p-3" > Your Food Is Not In Our Service </h5>
                }
              
            

        </div>

    </div>
    );
};

export default Home;