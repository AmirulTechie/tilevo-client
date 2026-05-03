import data from "../../public/data.json"
export async function getTilesData() {
    const res = await fetch('https://tilevo-server.onrender.com/tiles');
    const data = await res.json();
    return data.slice(0,4);
}

export async function getAllTilesData() {
    const res = await fetch('https://tilevo-server.onrender.com/tiles');
    const data = await res.json();
    return data;
}