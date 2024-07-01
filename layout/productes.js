import Head from "next/head";
import { db, storage } from "../firebase";
import { collection, addDoc ,getDocs,doc,Timestamp,deleteDoc , setDoc,getDoc} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";
const Productes = (props) => {
    const [category,setcategory]=useState([]);
    const de=[]
    const mob =props.data? props.data:[]
    const mob1= mob.length>4?mob.slice(0,4):mob
    const desk =props.data? props.data:[]
    const desk1= desk.length>9?desk.slice(0,8):desk
    const [appState, setAppState] = useAppContext();
    const router = useRouter()
  
    
    return (  
        <div className="mt-5">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>
        <div className="row w-100">
    <h4 className="col-12 title ms-auto"> حالات قبل وبعد</h4>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
 <div className="row">
  
  <div className="row col-12 col-lg-12 ">
  <div className="row col-12  d-block d-lg-none">
        {
        mob1.map((item)=>(
            <div className="w-200 ms-auto my-2 " key={item.imges} >
             <Image className="col-6 col-lg-3 border border-info p-1 pointer1"   loader={() => `${item.imges}?w=500px`} src={item.imges} unoptimized="false"    width={"500px"}
      height={"400px"}/>
            
        </div>
        ))
    }

    </div>
    <div className="d-none d-lg-block d-xl-block">
    <div className="row ">
        {
       desk1.map((item)=>(
            <div className="col-3 my-2" key={item.code} >
             <Image className="border border-info p-1 pointer1"  unoptimized="false"  loader={() => item.imges} src={item.imges}   width={"500px"}
      height={"400px"}/>
            
        </div>
        ))
    }
    </div>
    </div>

  </div>
 </div>
</div>
    );
}
 
export default Productes;