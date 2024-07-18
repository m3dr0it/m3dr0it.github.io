// components/RichTextEditor.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // import styles

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill value={value} onChange={onChange} theme="snow" />
  );
};

export default RichTextEditor;
