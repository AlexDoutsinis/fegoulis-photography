import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import SEO from "../components/SEO"

import Layout from "../components/Layout/Layout"

const Wrapper = styled.div`
  font-size: 1rem;
  font-family: "Pathway Gothic One", sans-serif;
  font-weight: 400;
  letter-spacing: 1.5px;
  padding-top: 4.5rem;
  margin-left: 4rem;

  ${media.lessThan("medium")`
    margin-left: 6rem;
  `}

  ${media.lessThan("small")`
    font-size: .9rem;
    margin-left: 2.5rem;
  `}
`

const H2 = styled.h2`
  margin-bottom: 3.5rem;
  font-size: 1.2rem;

  a {
    color: #fff;
    padding-bottom: 0.2rem;

    &:hover {
      border-bottom: solid #fff 1.5px;
    }

    transition: border-bottom 0.2s ease;
  }

  ${media.lessThan("small")`
    font-size: .9rem;
    margin-bottom: 3rem;
    width: 80vw;
  `}
`

const Form = styled.form`
  width: 30vw;

  ${media.lessThan("huge")`
    width: 35vw;
  `}

  ${media.lessThan("large")`
    width: 45vw;
  `}

  ${media.lessThan("medium")`
    width: 65vw;
  `}

  ${media.lessThan("small")`
    width: 80vw;
  `}
`

const HiddenBox = styled.div`
  display: none;
`

const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: inline-block;

  min-width: 18%;

  ${media.lessThan("huge")`
    min-width: 16%;
  `}

  ${media.lessThan("large")`
    min-width: 15%;
  `}

  ${media.lessThan("small")`
    min-width: 20%;
  `}
`

const Input = styled.input`
  padding: 0.6rem;
  color: #555555;
  background-color: #000;
  border: solid #555555 1px;
  width: 75%;
  color: #fff;
  letter-spacing: 1.5px;

  &:focus {
    outline-color: #fff;
    border-color: #fff;
  }
`

const TextArea = styled.textarea`
  padding: 0.6rem;
  color: #555555;
  background-color: #000;
  border: solid #555555 1px;
  height: 15vh;
  width: 75%;
  resize: none;
  color: #fff;
  letter-spacing: 1.5px;

  &:focus {
    outline-color: #fff;
    border-color: #fff;
  }
`

const ButtonBox = styled.div`
  margin: 1.5rem 0 2rem 18%;
  width: 75%;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  font-family: "Cardo", serif;
  font-weight: 700;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  border: none;

  &:hover {
    background-color: #ccc;
  }

  transition: background-color 0.2s ease;

  ${media.lessThan("small")`
    padding: 0.5rem 1rem;
  `}
`

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Contact with Kostas Fegoulis"
      keywords="contact"
    />
    <Wrapper>
      <H2>
        Contact me via{" "}
        <a href="https://www.instagram.com/kostasfeg21" target="__blank">
          Instagram
        </a>
        ,{" "}
        <a href="https://www.facebook.com/kfegoulis" target="__blank">
          Facebook
        </a>{" "}
        or fill-up the form to sent me an Email
      </H2>
      <Form
        method="post"
        name="contact"
        action="/thanks"
        data-netlify="true"
        netlify-honeypot="bot"
      >
        <Input type="hidden" name="form-name" value="contact" />
        <HiddenBox>
          <Label htmlFor="Don't fill this out, human"></Label>
          <Input type="text" name="bot" />
        </HiddenBox>
        <Field>
          <Label htmlFor="">Name</Label>
          <Input type="text" name="name" placeholder="Your Name" />
        </Field>
        <Field>
          <Label htmlFor="">Email</Label>
          <Input type="email" name="email" placeholder="Your Email" />
        </Field>
        <Field>
          <Label htmlFor="">Subject</Label>
          <Input type="text" name="subject" placeholder="Your Subject" />
        </Field>
        <Field>
          <Label htmlFor="">Message</Label>
          <TextArea name="message" placeholder="Your Message" />
        </Field>
        <ButtonBox>
          <Button type="submit">Send Message</Button>
        </ButtonBox>
      </Form>
    </Wrapper>
  </Layout>
)

export default ContactPage
