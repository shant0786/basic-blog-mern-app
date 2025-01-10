import { useParams } from "react-router-dom";
import { postDetails } from "../APIRequest/APIRequest.js";
import Layout from "../Layout/Layout.jsx";
import { useEffect, useState } from "react";
import { BlogDetails } from "../component/BlogDetails.jsx";
import { Loader } from "../component/Loader.jsx";

const DetailsPage = () => {
  const [list, setList] = useState(null);
  const { postID } = useParams();
  useEffect(() => {
    (async () => {
      const data = await postDetails(postID);

      setList(data);
    })();
  }, [postID]);

  return <Layout>{list ? <BlogDetails list={list} /> : <Loader />}</Layout>;
};

export default DetailsPage;
