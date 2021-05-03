import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "@src/aws-exports";
import { Trans } from "@src/common/components/blocks/Trans";
import Done from "@src/common/done";
import { createPost } from "@src/graphql/mutations";
import { listPosts } from "@src/graphql/queries";
import { Yahoo } from "@src/common/components/blocks/Yahoo";

export async function getStaticProps() {
  const SSR = withSSRContext();
  const response = await SSR.API.graphql({ query: listPosts });

  return {
    props: {
      posts: response.data.listPosts.items,
    },
  };
}

const MyComponent = ({ posts }) => {
  return (
    <div>
      {/*<div className="border focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center rounded-md px-3 py-2 text-white font-medium text-sm leading-4 bg-teal-300 hover:bg-indigo-700 focus:outline-none shadow-sm">*/}
      {/*  hellofs*/}
      {/*</div>*/}
      <Yahoo postsData={posts} />
      {/*<Trans />*/}
      {/*<Done />*/}
    </div>
  );
};

export default MyComponent;
