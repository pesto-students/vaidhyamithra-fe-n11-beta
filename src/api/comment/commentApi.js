import getApiConfig from "../api.config";

export const getBlogCommentsApi = async ({ blogId }) => {
  const { data } = await getApiConfig().get(`/getBlogComments/${blogId}`);
  return data;
};

export const postCommentApi = async ({ userId, blogId, comment }) => {
  const { data } = await getApiConfig().post("/createComment", { userId, blogId, comment });
  return data;
};

export const deleteCommentApi = async(commentId) => {
  const { data } = await getApiConfig().delete(`/deleteComment/${commentId}`);
  return data;
}
