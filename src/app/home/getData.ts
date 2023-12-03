export async function getHeroListData() {
    const res = await fetch(`${process.env.BASE_URL}/api/HeroList`);
    if (!res.ok) {
        throw new Error("Hero list calling fail!");
    }

    return res.json();
}
export async function getWorkListData() {
    const res = await fetch(`${process.env.BASE_URL}/api/WorkList`);
    if (!res.ok) {
        throw new Error("Work list calling fail!");
    }

    return res.json();
}
export async function getFeaturedProjectData() {
    const res = await fetch(`${process.env.BASE_URL}/api/FeaturedProject`);
    if (!res.ok) {
        throw new Error("Featured Project calling fail!");
    }

    return res.json();
}
export async function getBrandListData() {
    const res = await fetch(`${process.env.BASE_URL}/api/BrandList`);
    if (!res.ok) {
        throw new Error("Brand list calling fail!");
    }

    return res.json();
}
export async function getStatListData() {
    const res = await fetch(`${process.env.BASE_URL}/api/StatList`);
    if (!res.ok) {
        throw new Error("State list calling fail!");
    }

    return res.json();
}