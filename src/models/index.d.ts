import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Comments {
  readonly id: string;
  readonly title?: string;
  readonly content?: string;
  readonly like?: string;
  readonly postID?: string;
  readonly userID?: string;
  constructor(init: ModelInit<Comments>);
  static copyOf(source: Comments, mutator: (draft: MutableModel<Comments>) => MutableModel<Comments> | void): Comments;
}

export declare class Post {
  readonly id: string;
  readonly comment?: string;
  readonly like?: number;
  readonly description?: string;
  readonly title?: string;
  readonly uploadDate?: string;
  readonly published?: boolean;
  readonly userID?: string;
  readonly PostsComments?: (Comments | null)[];
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly age?: number;
  readonly country?: string;
  readonly city?: string;
  readonly gender?: string;
  readonly UserPosts?: (Post | null)[];
  readonly UserComments?: (Comments | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}