'use client'

import Editor from '../../components/Editor';
import { useState } from 'react';

const Home = () => {
        const [content, setContent] = useState<string>('');
      
        const handleChange = (value: string) => {
          setContent(value);
        };
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          // Lakukan sesuatu dengan 'content', seperti mengirim ke server
          console.log('Submitted content:', content);
        };

      return (
        <div>
          <h1>Buat Blog Post</h1>
          <form onSubmit={handleSubmit}>
            <Editor value={content} onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Home