import React from "react";
import deleteDummy from "@/helpers/deleteDummy";
import { useRouter } from "next/router";
const delBtn =
  "bg-transparent hover:bg-gray-600 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded my-3";
const MeetupDetail = ({ meetup = {} }) => {
  const router = useRouter();
  async function deleteHandler(meetupId) {
    const response = await deleteDummy(meetupId);
    if (response.deleted) {
      router.push('/home');
    } else {
      alert(response.message);
    }
  }
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
      {meetup.image ? (
        <img
          src={meetup.image}
          alt={meetup.title || "Meetup Image"}
          className="w-full h-full object-cover rounded-xl"
        />
      ) : (
        <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-xl">
          <span className="text-gray-500">Image is loading</span>
        </div>
      )}
      <h1 className="text-3xl font-bold mt-6">
        {meetup.title || "Untitled Meetup"}
      </h1>
      <p className="text-gray-600 mt-3 text-lg">
        {meetup.address || "No address provided"}
      </p>
      <p className="mt-5 text-gray-800 text-lg">
        {meetup.description || "No description available"}
      </p>
      <button
        onClick={() => meetup._id && deleteHandler(meetup._id)}
        className={`${delBtn} ${
          !meetup._id ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Delete this meeting
      </button>
    </div>
  );
};

export default MeetupDetail;
