import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname)
    document.getElementById('root').scrollTo(0, 0);
  }, [pathname]);

  return null;
}