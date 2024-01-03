import { Input } from 'antd';
import React, { useState } from 'react';
import styles from 'src/components/editable-text/editable-text.module.scss';

const ENTER = 'Enter';

const renderInput = (
  text: string,
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void,
) => (
  <Input
    value={text}
    autoFocus={true}
    onChange={setValue}
    bordered={false}
    className={styles.input}
  />
);

const renderText = (text: string) => {
  return text === '' ? 'Task with empty title' : text;
};

interface EditableTextProps {
  title: string;
  onChangeFinish: (value: string) => void;
}

const EditableText = ({ title, onChangeFinish }: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(title);

  const handleChangeFinish = () => {
    onChangeFinish(text);
    setIsEditing(false);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === ENTER) {
      handleChangeFinish();
    }
  };

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div
      onDoubleClick={() => {
        setIsEditing(true);
      }}
      onBlur={handleChangeFinish}
      onKeyDown={handleEnter}
      className={styles.editableText}
    >
      {isEditing ? renderInput(text, setValue) : renderText(text)}
    </div>
  );
};

export default EditableText;
