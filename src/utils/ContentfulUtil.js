import * as contentful from "contentful";

class ContentfulUtil {
  static client = contentful.createClient({
    space: "3s3opc3s1kvq",
    accessToken: "pHjuqFwk-3biuR4lNpPU12StgyZImRZQWRd452hVOdw",
  });

  static fetchAllBlogPosts = () =>
    ContentfulUtil.client.getEntries({
      content_type: "blog",
      order: "-sys.createdAt",
    });

  static fetchPostByPathName = pathName =>
    ContentfulUtil.client.getEntries({
      content_type: "blog",
      "fields.path[in]": pathName,
    });
}
export default ContentfulUtil;
