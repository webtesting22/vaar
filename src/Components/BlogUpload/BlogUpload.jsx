import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message,Card } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function BlogUpload() {
  const [blog, setBlogs] = useState()
  const [formData, setFormData] = useState({
    blogTitle: '',
    blogSubtitle: '',
    blogDescription: '',
    blogComment: ''
  });

  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:3001/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      message.success(data.message);
    } catch (error) {
      console.error('Error:', error.message);
      message.error('An error occurred. Please try again later.');
    }
  };

  const handleInputChange = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/blogs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data); // Update state with fetched data
        console.log("Show data", data);
        message.success('Blogs fetched successfully.');
      } catch (error) {
        console.error('Error:', error.message);
        message.error('An error occurred. Please try again later.');
      }
    };

    fetchData();
  }, []);

  // console.log("blogs", blog)
  return (
    <>

      <section style={{ backgroundColor: "white", padding: "8rem 0rem" }}>
        <Form
          name="blogForm"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Title"
            name="blogTitle"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input value={formData.blogTitle} onChange={e => handleInputChange('blogTitle', e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Subtitle"
            name="blogSubtitle"
            rules={[{ required: true, message: 'Please input the subtitle!' }]}
          >
            <Input value={formData.blogSubtitle} onChange={e => handleInputChange('blogSubtitle', e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="blogDescription"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <ReactQuill
              value={formData.blogDescription}
              onChange={value => handleInputChange('blogDescription', value)}
            />
          </Form.Item>

          <Form.Item
            label="Comment"
            name="blogComment"
            rules={[{ required: true, message: 'Please input the comment!' }]}
          >
            <ReactQuill
              value={formData.blogComment}
              onChange={value => handleInputChange('blogComment', value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>

     <section style={{ backgroundColor: "white", padding: "8rem 0rem" }}>
                <div className="blogs-container">
                    {blog && blog.map(blog => (
                        <Card key={blog._id} title={blog.blogTitle} style={{ marginBottom: 20 }}>
                            <p>{blog.blogSubtitle}</p>
                            <div dangerouslySetInnerHTML={{ __html: blog.blogDescription }} />
                            {/* {blog.blogComment} */}
                        </Card>
                    ))}
                </div>
            </section>
    </>
  )
}
export default BlogUpload;
