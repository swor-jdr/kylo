export interface MetaInfo {
    meta_description: string;
    opengraph_title: string;
    opengraph_description: string;
    opengraph_image: string;
    opengraph_image_width: number;
    opengraph_image_height: number;
    twitter_title: string;
    twitter_description: string;
    twitter_image: string;
    theme?: string;
}

export interface BlogAuthor {
    id: string;
    slug: string;
    name: string;
    email: string;
    bio?: Text;
    avatar: string;
    created_at: Date;
    updated_at?: Date;
    meta?: MetaInfo;
}

export interface BlogTag {
    id: string;
    slug: string;
    name: string;
    created_at: Date;
    updated_at?: Date;
    meta?: MetaInfo;
    pivot?: any;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    body: Text;
    published: boolean;
    publish_date: Date;
    featured_image: string;
    featured_image_caption: string;
    author_id: string;
    created_at: Date;
    updated_at?: Date;
    meta: MetaInfo;
    author: BlogAuthor;
    tags: BlogTag[];
}

// @todo get this interface out as soon as needed
export interface PaginatedResponse {
    current_page?: Number;
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    next_page_url?: string;
    path?: string;
    per_page?: number;
    to?: number;
    total?: number;
}

export interface PostsResponse extends PaginatedResponse {
    data: BlogPost[];
}
