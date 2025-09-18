"use client"

import { useForm } from "react-hook-form";
import { db } from "../../../lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser"; 

type FormData = {
    name: string,
    email: string,
    message: string;
};

export default function Form() {

    const { register, handleSubmit, formState: { errors },reset,} = useForm<FormData>();
    const onSubmit = async (data : FormData) => {
        console.log("check", data);
       try{
        await addDoc(collection(db, "contacts"), {
            name: data.name || "",
            email: data.email || "",
            message: data.message || "",
            createdAt: serverTimestamp(),
        });

        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_USER!,
            {
                name: data.name,
                email: data.email,
                message: data.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN!,
            {
                name: data.name,
                email: data.email,
                message: data.message,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        alert("Success!!");
        reset();

       }catch(error){
        console.error(error);
        alert("送信できませんでした。");
       }
    };
    return(
        <div className="flex flex-col min-h-screen items-center p-4 bg-gray-50">
            <h1 className="font-bold text-2xl mb-4">お問い合わせフォーム</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md shadow-md rounded-lg p-4 space-y-6 bg-white">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">氏名</label>
                    <input {...register("name", {required: "氏名は必須項目です。"})} className="w-[70%] border border-gray-300 p-2 rounded" placeholder="user name"/>
                </div>
                {errors.name &&<p className="text-red-500 text-sm">{errors.name.message}</p> }
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">E-Mail</label>
                    <input {...register("email", {
                        required: "メールアドレスは必須項目です。",
                        pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "メールアドレスの形式で入力してください。"}
                    })} className="w-[70%] border border-gray-300 p-2 rounded" placeholder="xxxx@xxco.jp"/>
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">問い合わせ内容 : </label>
                    <textarea {...register("message", {required: "問い合わせ内容を入力してください。"})} className="w-[70%] border border-gray-300 p-2 rounded"></textarea> 
                </div>
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                <button  type="submit" className="bg-blue-600 p-2 rounded-md text-white shadow-md">送信</button>
            </form>
        </div>
    );
}