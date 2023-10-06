const nodemailer = require('nodemailer');

// Replace these with your email service details
const emailConfig = {
  service: 'Gmail',
  auth: {
    user: 'they7704@gmail.com',
    pass: 'Xxxx@132',
  },
};

const transporter = nodemailer.createTransport(emailConfig);

exports.sendEmail = (req, res) => {
  //   const formData = req.body;

  // Send email notification to yourself
  const mailOptions = {
    from: 'they7704@gmail.com',
    to: 'they7704@gmail.com', // Send to your own email address
    subject: 'New Booking...',
    text: 'hey jay here', // You can format this as needed
    //   text: JSON.stringify(formData, null, 2), // You can format this as needed
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Email sending failed' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true, message: 'Form submitted successfully' });
    }
  });
};
