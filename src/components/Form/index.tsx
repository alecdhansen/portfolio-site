const Form = () => {
  return (
    <form name="contact" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Name <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email Address
          <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label htmlFor="form">
          Message <textarea id="form" rows={1} cols={10} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};
export default Form;
