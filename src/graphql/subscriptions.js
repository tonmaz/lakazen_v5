/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments {
    onCreateComments {
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
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments {
    onUpdateComments {
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
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments {
    onDeleteComments {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
