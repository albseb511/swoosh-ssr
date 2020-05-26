import Head from 'next/head'
import UserLayout from '../models/components/UserLayout'

export default function Home() {
  return (
   <UserLayout>
     <div>
     {/* make a component for low, high */}
       <div className="cont" height="30rem" width="100%">
          <div className="low-res-img"></div>
          <img className="land-img" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=60">
          </img>
       </div>
       {/* make a component for low, high */}
       <div className="content-wrapper text-light">
          <div className="logo">
            {/* <div className="low-res-img text-light">SWOOSH</div> */}
            <h3 className="text-monospace">SWOOSH!</h3>
            {/* <img src="logo"/> */}
          </div>
          <h3 className="description">Get your haircut today</h3>
          <div className="search-container">Searchbar</div>
       </div>
     </div>
     <div className="content bg-white">
        <div className="offerings p-5 m-5 d-flex justify-content-center">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
        <h3 className="m-auto">Collections</h3>
        <div className="collections p-5 m-5 d-flex justify-content-center">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
        <h3 className="m-auto">Locations</h3>
        <div className="locations p-5 m-5 d-flex justify-content-center">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>
      </div>
     <style jsx>
       {
         `
         .cont{
           background: rgb(200, 200, 200) none repeat scroll 0% 0%;
           height: 50rem;
           width: 100%;
           position: absolute;
           top: 0px;
           left: 0px;
           overflow: hidden;
           margin-bottom: 4rem;
         }

         .land-img{
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            object-fit: cover;
            transform: scale(1.1);
            opacity: 1;
            transition: all 1.4s ease 0s;
         }

         .content-wrapper{
            position: absolute;
            bottom: 50%;
            display: flex;
            flex-direction: column;
            -moz-box-pack: center;
            justify-content: center;
            -moz-box-align: center;
            align-items: center;
            width: 100%;
         }
         
         .content{
           position:absolute;
           top: 70%;
           width: 100%;
           min-height: 20rem;

         }
        `
       }
     </style>
   </UserLayout>
  )
}
