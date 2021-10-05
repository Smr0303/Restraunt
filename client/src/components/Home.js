import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewArrivals } from "../redux/action/filterActions";
import Loading from "./helpers/Loading";
import  Card from './Card';
export default function Home() {
  const dispatch = useDispatch();
     useEffect(() => {
    dispatch(getNewArrivals());
    console.log("yooooooooo")
  }, [dispatch]);
const { newArrivals } = useSelector((state) => state.filters);
const {loading}=useSelector((state)=>state.loading);
  return (
    <div>
      <section className="home-page">
        <div className="banner-image"></div>
        {loading?(
          <div className="text-center">{Loading()}</div>
        ):(
          <>
          <div className="container">
            <h3 className="py-5">New Arrivals</h3>
            <div className="row">
              {newArrivals&&newArrivals.map((newArrivals)=>(
                <Card key={newArrivals._id} product={newArrivals} homePage={true}/>
              )

              )}
            </div>
          </div>
          </>
        )}
      </section>
    </div>
  );
}
