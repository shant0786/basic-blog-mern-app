import NavBar from "../component/NavBar.jsx";
import { useEffect, useState } from "react";
import { postCategories } from "../APIRequest/APIRequest.js";

const Layout = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await postCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <div className="mx-auto bg-base-200">
      <NavBar categories={categories} />
      {children}
    </div>
  );
};

export default Layout;
