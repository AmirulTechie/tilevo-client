import data from "../../public/data.json"
export async function getTilesData() {
    return data.slice(0,4);
}