import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname)
    setTimeout(()=>{
    document.getElementById('root').scrollTo(0, 0);},300);
  }, [pathname]);

  return null;
}