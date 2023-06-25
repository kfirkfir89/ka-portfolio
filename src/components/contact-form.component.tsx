const ContactForm = () => {
  return (
    <form name="contact v1" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact v1" />
      <label>Name:</label>
      <input type="text" name="name" required />

      <label>Email:</label>
      <input type="email" name="email" required />

      <label>Message:</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
