/**
 * Yahoo
 */
import React, { useEffect, useState } from "react";
import common from "@src/common/lib/translations/common_en.json";
import { loadTranslations } from "@src/common/lib/functions/extractTranslations";
import useTranslation from "next-translate/useTranslation";
import { Button } from "@src/common/components/blocks/Button";
import Link from "next/link";
import { API } from "aws-amplify";
import { deletePost } from "@src/graphql/mutations";
import { listPosts } from "@src/graphql/queries";

export function Yahoo({ postsData }) {
  const { t } = useTranslation("common");
  const tr = loadTranslations(common, t);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  }
  async function handleDelete(id) {
    console.log(id);
    await API.graphql({
      query: deletePost,
      variables: { input: "845db485-fab1-4117-afc2-5ae1a129837f" },
      authMode: "API_KEY",
    });
    fetchPosts();
  }

  console.log(posts);
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">
        My Posts
      </h1>
      {posts.map((post, index) => (
        <div key={index} className="border-b border-gray-300	mt-8 pb-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          {/*<p className="text-gray-500 mt-2 mb-2">Author: {post.username}</p>*/}
          <Link href={`/edit-post/${post.id}`}>
            <a className="text-sm mr-4 text-blue-500">Edit Post</a>
          </Link>
          <Link href={`/posts/${post.id}`}>
            <a className="text-sm mr-4 text-blue-500">View Post</a>
          </Link>
          <button
            className="text-sm mr-4 text-red-500"
            onClick={() => handleDelete(post.id)}
          >
            Delete Post
          </button>
        </div>
      ))}
    </div>
  );
}
