/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComments = /* GraphQL */ `
  mutation CreateComments(
    $input: CreateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    createComments(input: $input, condition: $condition) {
      id
      title
      content
      like
      postID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateComments = /* GraphQL */ `
  mutation UpdateComments(
    $input: UpdateCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    updateComments(input: $input, condition: $condition) {
      id
      title
      content
      like
      postID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteComments = /* GraphQL */ `
  mutation DeleteComments(
    $input: DeleteCommentsInput!
    $condition: ModelCommentsConditionInput
  ) {
    deleteComments(input: $input, condition: $condition) {
      id
      title
      content
      like
      postID
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      comment
      likes
      description
      title
      uploadDate
      published
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PostsComments {
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      comment
      likes
      description
      title
      uploadDate
      published
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PostsComments {
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      comment
      likes
      description
      title
      uploadDate
      published
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PostsComments {
        nextToken
        startedAt
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      age
      country
      city
      gender
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserComments {
        nextToken
        startedAt
      }
      UserPosts {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      age
      country
      city
      gender
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserComments {
        nextToken
        startedAt
      }
      UserPosts {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      age
      country
      city
      gender
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserComments {
        nextToken
        startedAt
      }
      UserPosts {
        nextToken
        startedAt
      }
    }
  }
`;
