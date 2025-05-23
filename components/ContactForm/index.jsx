"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FormContainer, InputField } from "./styles";
import { DuesButton } from "@/app/about/styles";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleContactUs = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName) {
      return toast.error("Name is required. Please enter first and last name", {
        style: {
          padding: "16px",
          color: "#118B50",
        },
        iconTheme: {
          primary: "#118B50",
          secondary: "#fff",
        },
      });
    }

    if (!email) {
      return toast.error("Email is required. Please enter email", {
        style: {
          padding: "16px",
          color: "#118B50",
        },
        iconTheme: {
          primary: "#118B50",
          secondary: "#fff",
        },
      });
    }

    if (!mobile) {
      return toast.error(
        "Phone number is required. Please enter phone number",
        {
          style: {
            padding: "16px",
            color: "#118B50",
          },
          iconTheme: {
            primary: "#118B50",
            secondary: "#fff",
          },
        }
      );
    }

    if (!message) {
      return toast.error("Message is required, Please enter a message", {
        style: {
          padding: "16px",
          color: "#118B50",
        },
        iconTheme: {
          primary: "#118B50",
          secondary: "#fff",
        },
      });
    }

    const response = await axios.post("/api/send", {
      firstName,
      lastName,
      email,
      mobile,
      message,
    });

    if (response.status === 200) {
      setFirstName(" "), setLastName(" ");
      setEmail(" ");
      setMobile(" ");
      setMessage(" ");
      toast.success(`Hi ${firstName}, message sent successfully`, {
        style: {
          padding: "16px",
          color: "#01B700",
        },
        iconTheme: {
          primary: "#01B700",
          secondary: "#fff",
        },
      });
    }
  };

  return (
    <form onSubmit={handleContactUs}>
      <FormContainer>
        <InputField>
          <label htmlFor="firstName" name="firstName">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputField>
        <InputField>
          <label htmlFor="lastName" name="lastName">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputField>
      </FormContainer>

      <FormContainer>
        <InputField>
          <label htmlFor="email" name="email">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputField>
        <InputField>
          <label htmlFor="mobile" name="mobile">
            Phone Number
          </label>
          <input
            type="number"
            placeholder="Enter Phone Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </InputField>
      </FormContainer>

      <div>
        <label htmlFor="message" name="message">
          What can we help you with?
        </label>
      </div>
      <textarea
        name="message"
        id=""
        cols="10"
        rows="5"
        placeholder="Enter message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <DuesButton sx={{ m: "0", width: "100%" }} type="submit">
        Send
      </DuesButton>
    </form>
  );
}
