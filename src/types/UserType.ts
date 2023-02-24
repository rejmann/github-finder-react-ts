export type UserType = {
    id: number;
    login: string;
    avatar_url: string;
    html_url: string;
    name: string|null;
    company: string|null;
    blog: string|null;
    location: string|null;
    email: string|null;
    bio: string|null;
    
    public_repos: number|null;
    followers: number|null;
    following: number|null;

    created_at: string;

    repos_url: string|null;
}