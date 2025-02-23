import dummy from "./dummy";

export default async function postDummies() {
    try {
        const response = await fetch(
            `https://next-page-de00c-default-rtdb.europe-west1.firebasedatabase.app/dummies.json`, // Use dummy.id as key
            {
                method: 'PUT', // Use PUT instead of POST to set a custom key
                body: JSON.stringify(dummy),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("Data posted successfully:", responseData);
        return responseData;
    } catch (error) {
        console.error("Error posting data:", error);
        return null;
    }
}
