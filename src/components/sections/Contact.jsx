import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-left: 40px;
  
  width: 100%; /* Ensure full width */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Max width for large screens */
  gap: 20px; /* Consistent gap for all screen sizes */
  padding: 0 20px; /* Add side padding for smaller screens */
  padding-left: 500px;

  @media (max-width: 768px) {
    padding: 0 10px; /* Adjust padding for smaller screens */
  }
`;

const Title = styled.div`
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 36px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 800px; /* Ensure the form adjusts its width */
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  width: 100%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.text_primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  width: 100%;

  &:focus {
    border: 1px solid ${({ theme }) => theme.text_primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_3a1rn2b",
      "template_jleslsb",
      form.current,
      "jGdWBYCwGQhyHCfW5"
    ).then((result) => {
        alert ("Message Sent");
      form.current.result();
    },
    (error) => {
        alert(error);
    }
  );
};

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Reach out to me!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            required
          />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
