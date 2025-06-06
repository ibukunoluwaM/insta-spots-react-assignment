import React from "react";
import "./profile.css";
import "./gallery.css";
import "./newpost.css";




import profileImg from "../Assets/images/Bessie-Coleman.png";
import editIcon from "../Assets/icons/Edit-Profile-Icon-Light.svg";
import newPostIcon from "../Assets/icons/New-Post-Icon.svg";

import { useState, useRef } from "react";

export default function Profile() {
  const dialogNewPostRef = useRef(null);
  const dialogEditRef = useRef(null);

  // Profile info state
  const [profileName, setProfileName] = useState("Bessie Coleman");
  const [profileJob, setProfileJob] = useState("Civil Aviator");

  // Open / close dialogs
  const openNewPostDialog = () => {
    if (dialogNewPostRef.current) dialogNewPostRef.current.showModal();
  };

  const closeNewPostDialog = () => {
    if (dialogNewPostRef.current) dialogNewPostRef.current.close();
  };

  const openEditModal = () => {
    if (dialogEditRef.current) dialogEditRef.current.showModal();
  };

  const closeEditModal = () => {
    if (dialogEditRef.current) dialogEditRef.current.close();
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("text");
    const imageFile = formData.get("imageFile");
    const imageUrl = formData.get("imageUrl");

    console.log("New Post:", { name, imageFile, imageUrl });

    closeNewPostDialog();
    e.target.reset();
  };

  // Handle Edit Profile form submission
  const handleEditProfileSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newName = formData.get("editName");
    const newJob = formData.get("editJob");

    setProfileName(newName);
    setProfileJob(newJob);



    closeEditModal();
    e.target.reset();
  };

  return (
    <>
      <section className="profile">
        <img
          className="profileImage"
          src={profileImg}
          alt="Profile Image"
        />

        <div className="profileDetails">
          <div className="profileNameAndJob">
            <h2 className="profileName">{profileName}</h2>
            <p className="profileJobTitle">{profileJob}</p>
          </div>
          <p className="profileEdit" onClick={openEditModal} style={{ cursor: "pointer" }}>
            <img
              className="EditIcon"
              src={editIcon}
              alt="Edit Image Icon"
            />
            Edit Profile
          </p>
        </div>

        <button className="profileBtn" onClick={openNewPostDialog}>
          <img
            className="newPostIcon"
            src={newPostIcon}
            alt="New Post Icon"
          />
          New Post
        </button>

        {/* New Post Modal */}
        <dialog id="newPostDialog" ref={dialogNewPostRef}>
          <button
            type="button"
            className="closeDialog"
            style={{ float: "right" }}
            onClick={closeNewPostDialog}
          >
            ✖
          </button>
          <div className="wrapperrr">
            <h2>New Post</h2>
            <span style={{ fontSize: "1rem" }}>Upload Image or Paste URL</span>
            <form className="formm" id="newPostForm" onSubmit={handleNewPostSubmit}>
              <input
                type="text"
                name="text"
                placeholder="Enter name"
                required
              />
              <input
                type="file"
                name="imageFile"
                accept="image/*"
                placeholder="https://example.com/image.jpg"
              />
              <input type="url" name="imageUrl" placeholder="Image URL" />
              <button className="submitBtn" type="submit">
                Add Card
              </button>
            </form>
          </div>
        </dialog>
      </section>

      <div className="thin-line"></div>

      {/* Edit Profile Modal */}
      <dialog className="modal" id="editModal" ref={dialogEditRef}>
        <div className="flex">
          <div className="modal-content">
            <p
              className="closeBtn"
              style={{ cursor: "pointer" }}
              onClick={closeEditModal}
            >
              ❌
            </p>
            <h2 className="modal-title">Edit Profile</h2>
            <form onSubmit={handleEditProfileSubmit}>
              <label htmlFor="editName">Name:</label>
              <input
                type="text"
                placeholder="Name"
                id="editName"
                name="editName"
                defaultValue={profileName}
                required
              />
              <label htmlFor="editJob">Job Title</label>
              <input
                type="text"
                placeholder="Job Title"
                id="editJob"
                name="editJob"
                defaultValue={profileJob}
                required
              />

              <input
                type="file"
                name="editImage"
                id="editImage"
                accept="image/*"
              />

              <button id="saveProfile" type="submit">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
