//helpers/createDummy.js
export default async function createDummy(meetupData) {
  try{
    const response = await fetch('/api/new-meetup', {
      body: JSON.stringify(meetupData),
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
   return await response.json();
  }catch(error){
    console.error("Database Error:", error);
    throw new Error({ message: "Failed to insert meetup", error: error.message});
  }
}
