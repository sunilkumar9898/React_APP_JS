import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export const ContactUs = () => {
    const form = useRef();
      const toast = useToast();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_smjllg5", "template_onmdqpc", form.current, {
                publicKey: "j5QvLSAvwbueWRTby",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    toast({
                        title: "Account created.",
                        position: "top-right",
                        description: "We've created your account for you.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    };

    return (
        <form
            className="m-auto border border-black  w-1/4 mt-20"
            ref={form}
            onSubmit={sendEmail}>
            <div className="mx-auto p-10">
                <label htmlFor="Name">Name</label>
                <br />
                <input
                    className="border p-1 border-black w-full rounded"
                    type="text"
                    name="form_name"
                />
                <br />
                <label htmlFor="form_email">Email</label>
                <br />
                <input
                    className="border p-1 border-black w-full rounded"
                    type="text"
                    name="form_email"
                />
                <br />
                <div>Message</div>
                <textarea
                    className="border p-1 border-black w-full rounded"
                    name="message"></textarea>
                <br />
                <br />
                <button className="flex mx-auto bg-green-800 px-12 text-white p-2 rounded">
                    Submit
                </button>
            </div>
        </form>
    );
};
