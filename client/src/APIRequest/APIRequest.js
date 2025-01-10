import axios from "axios";

const BASE_URL = "https://basic-blog.teamrabbil.com/api";

export async function postCategories() {
  const result = await axios.get(BASE_URL + "/post-categories");

  if (result.status !== 200) return [];
  return result.data;
}
export async function postLatest() {
  const result = await axios.get(BASE_URL + "/post-newest");

  if (result.status !== 200) return [];
  return result.data;
}
export async function postByCategory(id) {
  const result = await axios.get(BASE_URL + `/post-list/${id}`);

  if (result.status !== 200) return [];
  return result.data;
}
export async function postDetails(id) {
  const result = await axios.get(BASE_URL + `/post-details/${id}`);

  if (result.status !== 200) return [];
  return result.data;
}
