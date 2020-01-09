import React, { useState } from 'react';

const CreateTaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="What would you like to get done?"
        autoComplete="off"
        className="text-input new-task-text-input"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};

export default CreateTaskForm;
