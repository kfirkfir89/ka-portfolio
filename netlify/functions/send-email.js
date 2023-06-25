// const sendgrid = require('@sendgrid/mail');

// exports.handler = async (event, context) => {
//   const { SENDGRID_API_KEY } = process.env;
//   sendgrid.setApiKey(SENDGRID_API_KEY);

//   const { email, subject, message } = JSON.parse(event.body);

//   const emailData = {
//     to: email,
//     from: 'your-email@yourdomain.com', // replace this with your own email
//     subject: subject,
//     text: message,
//   };

//   try {
//     await sendgrid.send(emailData);
//     return {
//       statusCode: 200,
//       body: 'Email sent',
//     };
//   } catch (error) {
//     return {
//       statusCode: error.code,
//       body: JSON.stringify({ error: error.message }),
//     };
//   }
// };
