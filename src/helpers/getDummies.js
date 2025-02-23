export default async function getDummies(){
    try {
        const response = await fetch('https://next-page-de00c-default-rtdb.europe-west1.firebasedatabase.app/.json');
        const data = await response.json();
        return data.dummies
    } catch (error) {
        console.error("Error fetching data:", error);
    }    
}