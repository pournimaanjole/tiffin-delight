import React from 'react'
import './Menucard.css';
import Cards from './../../components/Cards/Cards';
import Menu from './../utils/Menu.json';


const Menucard = () => {
  return (<>
    <div>
     <div >
     <div class="container-fluid  ">
  <div class="row">
    <div class="col-lg-6 col-md-12 background-img ">
      <div className='select-menu'>
<h3 className='likes'>What would you like</h3>
<button className='button'>Breakfast</button>
<button className='button'>Lunch</button>
<button className='button'>Dinner</button>
<form>
  <span className='cuisines'>Cuisines</span>
  <input type='checkbox' 
   value='Veg'
   className='checkbox-input' />
  <span className='veg-non'>Veg</span>

  <input type='checkbox'
   value='Non-veg'
    className='checkbox-input'/>
  <span className='veg-non'>Non-veg</span>
</form>
<div>
<button className='button list'>Maharashtrian</button>
<button className='button list'>North-Indian</button>
<button className='button list'>Gujarati</button>
<button className='button list'>Diabetic</button>
<button className='button list'>Health-Food</button>
<button className='button list'>South-Indian</button>
<button className='button list'>Jain</button>
<button className='button list'>Rajasthani</button>
<button className='button list'>Bengali</button>
</div>
<button className='search-btn'>Search</button>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 scroll-behaviour">
    
    {
      Menu.map((card,index)=>{
        const {id,img,miniMeal,regularMeal,jumboMeal,tittle} = card
        return(<>
 <Cards id={id} img={img} minimeal={miniMeal} regularmeal={regularMeal} jumbomeal={jumboMeal} tittle={tittle} />

        </>)
      })
    }
    </div>
   
  </div>
</div>
     </div>
    </div>
    </>
  )
}

export default Menucard