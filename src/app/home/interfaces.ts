export interface BrandType {
    id: number;
    name: string;
    image: string;
}

export interface WorkListType {
    id: number;
    title: string;
    des: string;
    step: string;
}

export interface FeaturedProjectType {
    id: number;
    title: string;
    image: string;
    live: string;
    remark: string;
    created_at: string;
}

export interface StateListType {
    id: number;
    followers: string;
    solved: string;
    customers: string;
    projects: string;
}

export interface HeroType {
    id: number;
    title: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}