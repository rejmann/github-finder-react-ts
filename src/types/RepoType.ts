export type RepoType = {
    name: string;
    full_name: string;
    description: string|null;
    html_url: string;
    language: string;
    topics: string[]|null;
}