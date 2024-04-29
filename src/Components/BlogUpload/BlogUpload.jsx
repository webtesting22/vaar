import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Upload } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'react-quill-image-uploader';
import "./uploadform.css"
import { Row, Col } from 'antd';
import { json } from 'react-router-dom';
function BlogUpload() {
  const [form] = Form.useForm();
  const [image, setimage] = useState("")
  const [formData, setFormData] = useState({
    blogTitle: '',
    blogSubtitle: '',
    blogDescription: '',
    blogComment: '',
  });
  const backendUrl = 'http://localhost:3001';
  const uploadImg = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "NewfileUpload");
    formData.append("cloud_name", "dxh1zviu0"); // Use the correct upload preset name

    fetch("https://api.cloudinary.com/v1_1/dxh1zviu0/image/upload", {
      method: "POST",
      body: formData
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Upload failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {

        setimage(data.url);
        console.log(data.url);
        // Now you can use the data.url or data.secure_url to store the image URL in your backend
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinish = async (values) => {
    try {
      const response = await fetch('https://vaarbackend-two.vercel.app/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...values, image: image })
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

  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: ["#FFFFFF", "#000000", "#D4F604","rgb(71, 84, 103)"] }, { background: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      handlers: {
        image: ImageUploader.handler,
      },
    },
  };




  //   const uploadImg = () => {
  //     const formData = new FormData();
  //     formData.append("file", image);
  //     formData.append("upload_preset", "ml_default"); // Corrected key to match Cloudinary's requirements
  //      // Corrected key to match Cloudinary's requirements

  //     fetch("https://api.cloudinary.com/v1_1/dxh1zviu0/image/upload", {
  //         method: "POST",
  //         body: formData
  //     })
  //     .then((res) => res.json())
  //     .then((data) => {
  //         console.log(data);
  //         setimage(data)
  //         // Now you can use the data.url or data.secure_url to store the image URL in your backend
  //       })
  //     .catch((err) => {
  //         console.log(err);
  //     });
  // };

  return (
    <section style={{ backgroundColor: 'black', padding: '8rem 0rem' }} id='upload-form'>
      <div className='container'>
        <div className="padding-slite"></div>
        <div className="padding-slite"></div>
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
          <Form.Item
            label="image"
            name="image"
          // rules={[{ required: true, message: 'Please select a image' }]}
          >
            <div className='upload-img-container'>
              <Row>
                <Col lg={12}>
                  <input type="file" onChange={(e) => setimage(e.target.files[0])} />
                </Col>
                <Col lg={12}>
                  <img src={image} alt="" /></Col>
              </Row>


            </div>
            <Button onClick={uploadImg}>uploadImage</Button>
          </Form.Item>
          <div className="padding-slite"></div>
          <div className="padding-slite"></div>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" id='submit-btn'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </section>

  );
}

export default BlogUpload;
