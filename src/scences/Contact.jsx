import React from 'react'
import LineGradient from '../components/LineGradient'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Contact = () => {
    const { register, trigger, formState: { errors }} = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();

        if(!isValid){
            e.preventDefault();
        }
    }

    return (
    <section id='contact' className='py-48'>
        {/* HEADINGS */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity: 1, x: 0}
            }}>
                <div>
                    <p className='font-semibold text-4xl'>
                        <span className='text-yellow'>CONTACT ME </span> TO GET STARTED
                    </p>
                    <div className='flex md:justify-end my-5'>
                        <LineGradient width='mx-auto w-2/4' />
                    </div>
                </div>
        </motion.div>
        {/* FORM */}
        <div className='md:flex md:justify-between gap-16 mt-5'>
            <motion.div
            className='basis-1/2 flex justify-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: {opacity:0, y: 50},
                visible: {opacity: 1, y: 0}
            }}
            >
                <img src='../assets/contact-image.jpeg' alt='contact'/>
            </motion.div>

            <motion.div
            className='basis-1/2 mt-10 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: {opacity:0, y: 50},
                visible: {opacity: 1, y: 0}
            }}
            >
                <form
                    target='_blank'
                    onSubmit = {onSubmit}
                    action=''
                    method='POST'
                >
                    <input
                        className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
                        type='text'
                        placeholder='NAME'
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                </form>
            </motion.div>
        </div>
    </section>
    )
}

export default Contact