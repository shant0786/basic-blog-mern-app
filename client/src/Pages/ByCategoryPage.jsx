import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import { useEffect, useState } from "react";
import { postByCategory } from "../APIRequest/APIRequest.js";
import BlogList from "../component/BlogList.jsx";
import { Loader } from "../component/Loader.jsx";

const ByCategoryPage = () => {
  const [list, setList] = useState(null);
  const { categoryID } = useParams();

  useEffect(() => {
    (async () => {
      const data = await postByCategory(categoryID);
      setList(data);
    })();
  }, [categoryID]);

  return <Layout>{list ? <BlogList list={list} /> : <Loader />}</Layout>;
};

export default ByCategoryPage;
