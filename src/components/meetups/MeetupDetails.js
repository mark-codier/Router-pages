import React from "react";

const MeetupDetail = ({ meetup = {} }) => {
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
      <h1 className="text-3xl font-bold mt-6">{meetup.title || "Untitled Meetup"}</h1>
      <p className="text-gray-600 mt-3 text-lg">{meetup.address || "No address provided"}</p>
      <p className="mt-5 text-gray-800 text-lg">{meetup.description || "No description available"}</p>
    </div>
  );
};

export default MeetupDetail;
