import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewArrivals } from "../redux/action/filterActions";
export default function Home() {
  const dispatch = useDispatch();
     useEffect(() => {
    dispatch(getNewArrivals());
  }, [dispatch]);
const { newArrivals } = useSelector((state) => state.filters);
  return (
    <div>
      <section className="home-page">
        <div className="banner-image"></div>
        {console.log(newArrivals)}
      </section>
    </div>
  );
}
