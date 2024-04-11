import React,{useState} from 'react'
import Card from "./components/Card";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App(){
  let[cartValue,setCartValue] = useState(0)
  let data = [{
    productName:"Fancy product",
    Sprice :40.00,
    Eprice :80.00,
    star:false,
    option : "View option"
},
{
  productName:"Special Item",
  Sprice :20.00,
  Eprice :18.00,
  star:true,
  option : "Add cart"
},
{
  productName:"Sale Item",
  Sprice :50.00,
  Eprice :25.00,
  star:false,
  option : "Add cart"
},
{
  productName:"Popular Item",
  star:true,
  Sprice :40.00,
  option : "Add cart"
},{
  productName:"Sale Item",
  Sprice :50.00,
  Eprice :25.00,
  star:false,
  option : "Add cart"
},{
  productName:"Fancy product",
  Sprice :120.00,
  Eprice :280.00,
  star:false,
  option : "View option"
},{
  productName:"Special Item",
  Sprice :20.00,
  Eprice :10.00,
  star:true,
  option : "Add cart"
},{
  productName:"Popular Item",
  Sprice :40.00,
  star:true,
  option : "Add cart"
}]
  return <>
  <Navbar cartValue={cartValue}/>
  <Header />
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                      data.map((e,i)=>{ 
                        return <Card setCartValue={setCartValue} detail={e} key={i} />
                    })
                      
                    }
                    
                </div>
            </div>
  </section>
  <Footer/>
    </>

}

export default App