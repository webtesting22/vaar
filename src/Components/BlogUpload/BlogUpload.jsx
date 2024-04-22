import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'react-quill-image-uploader';

function BlogUpload() {
  const [blog, setBlogs] = useState()
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    blogTitle: '',
    blogSubtitle: '',
    blogDescription: '',
    blogComment: '',
  });
  const [value, setValue] = useState('');
  const onFinish = async (values) => {
    try {
      const response = await fetch('https://vaarbackend-two.vercel.app/hello', {
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

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://vaarbackend-two.vercel.app/blogs', {
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
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }], // Add color and background color picker
        [{ script: 'sub' }, { script: 'super' }],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      handlers: {
        image: ImageUploader.handler,
      },
    },
  };
  // const modules = {
  //   toolbar: {
  //     container: [
  //       ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  //       ['blockquote', 'code-block'],
  //       [{ header: 1 }, { header: 2 }], // custom button values
  //       [{ list: 'ordered' }, { list: 'bullet' }],
  //       [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  //       [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  //       [{ direction: 'rtl' }], // text direction

  //       [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  //       [{ header: [1, 2, 3, 4, 5, 6, false] }],
  //       [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //       [{ font: [] }],
  //       [{ align: [] }],

  //       ['link', 'image', 'video'], // link and image, video
  //       ['clean'], // remove formatting button
  //     ],
  //     handlers: {
  //       image: ImageUploader.handler,
  //     },
  //   },
  //   clipboard: {
  //     matchVisual: false,
  //   },
  // };
  // console.log("blogs", blog)
  return (
    <>

      <section style={{ backgroundColor: "white", padding: "8rem 0rem" }}>
        <Form
          form={form}
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
            <Input
              value={formData.blogTitle}
              onChange={(e) => handleInputChange('blogTitle', e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Subtitle"
            name="blogSubtitle"
            rules={[{ required: true, message: 'Please input the subtitle!' }]}
          >
            <Input
              value={formData.blogSubtitle}
              onChange={(e) => handleInputChange('blogSubtitle', e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="blogDescription"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <ReactQuill
              value={formData.blogDescription}
              onChange={(value) => handleInputChange('blogDescription', value)}
              modules={modules}
            />
          </Form.Item>

          <Form.Item
            label="Comment"
            name="blogComment"
            rules={[{ required: true, message: 'Please input the comment!' }]}
          >
            <ReactQuill
              value={formData.blogComment}
              onChange={(value) => handleInputChange('blogComment', value)}
              modules={modules}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
    /> */}
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
