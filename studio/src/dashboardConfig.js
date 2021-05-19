export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a4f5c799934bce1253cd21",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-k12nyn1i",
                  apiId: "14594f54-c7a2-402e-b045-1a657c34d549",
                },
                {
                  buildHookId: "60a4f5c71c3252cafa1bc1ea",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-k2gs2cg2",
                  apiId: "1a7e4b9d-8c32-4630-a071-854fe3c70d71",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DoubleMarv/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-k2gs2cg2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
