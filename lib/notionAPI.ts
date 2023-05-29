import { Client } from "@notionhq/client";
const notionDbId = "d8cfb3a3bd384977a10e4da98c894bed";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    database_id: notionDbId,
    page_size: 100,
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    // return post;
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post) => {
  return {
    title: post.properties.Name.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    date: post.properties.Date.date.start,
    // slug: post.properties.Slug.rich_text[0].plain_text,
  };
};
