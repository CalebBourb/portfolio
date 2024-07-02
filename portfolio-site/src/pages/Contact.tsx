import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [result, setResult] = React.useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "85805d4f-44f4-400c-ae60-d4bdab22a733");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("There was an error submitting the form.");
    }
  };

  return (
    <div className="w-full h-full">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex justify-center h-[10vh] max-sm:h-[10vh]"
        >
            <h1 className="text-center text-4xl max-sm:text-2xl font-bold mb-4 font-roboto">
            Contact Me
            </h1>
        </motion.div>
        <div className="h-[50vh] max-w-[100vh] mx-auto">
            <form className="flex flex-col justify-center px-5" onSubmit={onSubmit}>
                <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                delay: 1.2,
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                }}
                className='text-center text-lg pt-2'>Name:</motion.p>

                <motion.input 
                initial={{ y: 600 }}
                animate={{ y: 0 }}
                transition={{ y: { type: "spring", delay: 0.1, stiffness:25, duration: 5 } }}
                className="p-2 rounded-2xl shadow-md bg-slate-100"
                type="text" name="name" required />

                <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                delay: 1.3,
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                }}
                className='text-center text-lg pt-2'>Email:</motion.p>

                <input type="hidden" name="access_key" value="key"></input>

                <motion.input 
                initial={{ y: 600 }}
                animate={{ y: 0 }}
                transition={{ y: { type: "spring", delay: 0.3, stiffness:25, duration: 5 } }}
                className="p-2 rounded-2xl shadow-md bg-slate-100"
                type="email" name="email" required />

                <motion.p 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                delay: 1.4,
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                }}
                className='text-center text-lg pt-2'>Message:</motion.p>

                <motion.textarea
                initial={{ y: 600 }}
                animate={{ y: 0 }}
                transition={{ y: { type: "spring", delay: 0.5, stiffness:25, duration: 5 } }}
                className="mb-4 h-40 resize-none p-2 rounded-2xl shadow-md w-full bg-slate-100"
                name="message"
                required>
                </motion.textarea>

                <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                delay: 1.5,
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
                }}
                className="w-fit h-full bg-slate-100 rounded-lg shadow-md p-2 flex flex-row items-center text-sm mx-auto"
                type="submit">Send Email</motion.button>
            </form>
            <div className='text-center pt-4'>
                <span>{result}</span>
            </div>
        </div>
        
    </div>
  );
};

export default Contact;
