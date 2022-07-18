const Edit = ({ id, handleEdit }) => {
  const handleClick = (e) => {
    e.preventDefault();

    handleEdit(id, newTask);
  };
  <button className="editButton" type="button" onClick={handleClick}>
    Edit
  </button>;
  <form></form>;
  //TODO: make form appear on button click
};

export default Edit;
