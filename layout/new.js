import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import Image from 'next/image'
import { useAppContext } from "../AppContext";
import { useRouter } from "next/router";

const NEw = (props) => {
    let storage=[]
    const mob =props.data? props.data:[]
    const mob1= mob.length>4?mob.slice(0,4):mob
    const desk =props.data? props.data:[]
    const desk1= desk.length>4?desk.slice(0,4):desk
    const [appState, setAppState] = useAppContext();
    const router = useRouter()
    const handelrouter=(e,path)=>{
        e.preventDefault() 
        router.push(`product/${path}`)
    }
    const oncart =async(x,y,z)=> {
    const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
         myArray.push({"code":x,"title":y,"img":z})
        localStorage.setItem("mycart", JSON.stringify(myArray))
        setAppState(myArray)
        }  
     useEffect(()=>{
     const myArrayFromLocalStorage = localStorage.getItem('mycart')
    if (myArrayFromLocalStorage && myArrayFromLocalStorage.length) {
    var myArray = JSON.parse(myArrayFromLocalStorage)}else{var myArray=[]  }
    setAppState(myArray)    
    return myArrayFromLocalStorage
    },[])
 
  
    return (  
        <div className="mt-1">
        <Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>

        </Head>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
crossOrigin="anonymous">
</script>
<div className="row w-100">
    <h4 className="col-12 col-lg-12 title ms-auto"> !خدماتنا
    ماذا نقدم لمرضانا </h4>

</div>
<div  >

    <div className="">
    <div className="row ">
       
            <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"a.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                حشوة الكمبوزت واحدة من أهم الخيارات المتاحة. تصنع الحشوة الكمبوزيت من مادة بلاستيكية طويله الأمد بنفس لون الأسنان الطبيعية ولذلك تكون غير ملحوظة .
                </p>

            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"b.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                خلع الأسنان هو إجراء روتيني في عيادة طب الأسنان وبحسب عيادات فإن إجراء خلع الأسنان على المدى البعيد لا يحمل أي خطورة أو اختلاطات.                </p>

            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"c.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                تصبغات الأسنان لا يمكن تجنبها بسب استهلاك المأكولات والمشروبات الصابغة مثل الشاي والقهوة والشيكولاته. لذلك نستخدم تقنيات لتبيض أسنان بدون اية آثار ضارة .</p>
            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"b.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                التركيبة هي تلبيسة توضع على السن وتغلفه من كل جهاته، يتم وضعها على السن الذي فقد جزء كبير من أنسجته نتيجة كسور أو سوس أو تعفن. </p>
            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"e.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                الهدف الأساسي من تقويم الأسنان هو تعديل اصطفاف الأسنان بجانب بعضها البعض بحيث تظهر بشكل طبيعي متناسق. نقوم بتشخيص الحالة ويحدد جدول زمني للتقويم في حالة سوء الإطباق.                </p>
            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"f.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                الزرعة السنية مصنوعة من أسطوانة معدنية من مادة التيتانيوم تعوض مكان جذر السن المخلوع، بعد فترة من الزمن تضاف أجزاء أخري الي الزرعة مما يسمح  بوضع التركيبة على هذه الزرعة لتعوض مكان السن المخلوع.</p>            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"g.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                تعتمد تقنية على الدخول الى الفراغ العصبي وإزاله كل الخلايا والأنسجة الميتة ومن ثم يتم تعقيم القنوات العصبيه وحشواها بمواد خاصة وحديثاً تطورت تقنية معالجة                </p>            <div className="inlin">         
             <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-3 p-2"  >
             <Image className=" p-0 mb-0 border border-info "  unoptimized="false"  loader={() => "sht.jpg"} src={"h.jpg"}   width={"500px"}
      height={"400px"}/>
               <div className="p-2 mt-0 border border-success bg-li"  >
                <p className="text-center">
                الزيارة الأولي للطفل إلي طبيب الأسنان يجيب أن تكون خلال السنة الأولي من عمره، في هذا الوقت الذي تكون فيه كثير من أسنان الطفل بذغت في اللثة وكذلك هي تقريباً ستة أشهر من بذوغ السن الأول للطفل </p>            <a className="btn btn-light  mx-2 " href="https://api.whatsapp.com/send?phone=00201018030690"><img className="whats" src="/WhatsApp.svg.png"  alt="" />تواصل</a>
            </div>
            </div>
       
    </div>
    </div>

 </div>
 
</div>
    );
}
 
export default NEw;