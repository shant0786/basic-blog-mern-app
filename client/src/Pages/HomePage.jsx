import { useEffect, useState } from "react";
import BlogList from "../component/BlogList.jsx";
import Layout from "../Layout/Layout.jsx";
import { postLatest } from "../APIRequest/APIRequest.js";
import { Loader } from "../component/Loader.jsx";

const HomePage = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await postLatest();
      setList(data);
    })();
  }, []);
  return <Layout>{list ? <BlogList list={list} /> : <Loader />}</Layout>;
};

export default HomePage;
