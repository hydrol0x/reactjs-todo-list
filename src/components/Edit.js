const Edit = ({ id, handleEdit }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleEdit(id);
  };
  <button className="editButton" type="button" onClick={handleClick}>
    Edit
  </button>;
};

export default Edit;
