import Head from "next/head";
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Partener = (props) => {
    const [cart,setcart]=useState([])
    const ontele = (e) => setcart({...cart,tele:e.target.value})
    const onname = (e) => setcart({...cart,name:e.target.value})
    const onmsg = (e) => setcart({...cart,msg:e.target.value})
    const onsend = async(e)=>{
        e.preventDefault() 
          const docRef = await setDoc(doc(db, "orders", cart.tele), cart); 
          setcart({name:"",tele:"",msg:""}) 
         
    
        
    
      }
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <div className="row w-100">
    {/* <h4 className="col-12 col-lg-3 my-2 title ms-auto"> احجز موعد</h4>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div   >
<form className="my-3 p-5 bg-light" onSubmit={onsend}>
  <div class="form-group ">
    
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="الاســـــم" required onChange={onname} value={cart.name}/>
  </div>
  <div class="form-group my-3">
    
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" رقم الموبايل" required onChange={ontele} value={cart.tele}/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">الرسالة</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={onmsg}value={cart.msg}></textarea>
  </div>
  <button type="submit" class="btn btn-success my-2" onSubmit={onsend}>أرسل</button>
</form> */}
<iframe className="w-100" src="https://www.google.com/maps/embed/v1/place?q=GENTLE+CARE+CLINIC+..+Dr%2FAhmed+Osama+Ouf/@31.3230601,31.7613873,17z&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8
" title="GENTLE CARE CLINIC .. Dr/Ahmed Osama Ouf
"></iframe>

 </div>
</div>
    );
}
 
export default Partener;