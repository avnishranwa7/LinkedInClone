export interface User {
  id: string;
  name: string;
  bio?: string;
  imageUri?: string;
  address?: string;
  company?: string;
}

export type connectionType =
  | "comment"
  | "contributed"
  | "support"
  | "liked"
  | "funny";

export interface Post {
  id: string;
  userId: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
  tags?: Array<{ id: string; tag: string }>;
  connection?: {
    userId: string;
    type: connectionType;
  };
}
