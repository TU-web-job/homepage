"use client"

import { useForm } from "react-hook-form";
import { db } from "../../../lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type trialData = {
    trialName: string,
    parentName: string,
    grade: number,
    trialDate: Date,
    mail: string,
    message: string,
}

const gradeType = [
    "小学生未満","低学年","中学年", "高学年"
];

export default function TrailInput(){
    const {register, handleSubmit, formState: { errors }, reset, } = useForm<trialData>();
    const onSubmit = async (data : trialData) => {
        console.log("check", data);
        try{
            await addDoc(collection(db, "trial"),{
            trialName: data.trialName || "",
            parentName: data.parentName || "",
            grade: data.grade || 0,
            trialDate: data.trialDate || "",
            mail: data.mail || "",
            message: data.message || "",
            createdAt: serverTimestamp(),
            });

            alert("送信完了しました。");
            reset();
        } catch(error){
            console.error(error);
            alert("送信できませんでした。");
        }
    };
    return(
        <div className="flex flex-col justify-center items-center p-4 bt-4 bg-gray-50">
            <h2 className="p-2 mb-4 font-bold text-2xl">練習体験会 応募ページ</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-2 mb-2">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">体験生氏名</label>
                    <input {...register("trialName", {required: "体験者名を入力してください。"})} className="border border-gray-300 p-2 rounded" placeholder="名前 体験" />
                </div>
                {errors.trialName && <p className="text-red-500 text-sm">{errors.trialName.message}</p>}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">保護者名</label>
                    <input {...register("parentName", {required: "保護者名を入力してください。"})} className="border border-gray-300 p-2 rounded" placeholder="名前 親名"/>
                    {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName.message}</p>}
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">学年</label>
                        <select {...register("grade", {required:"選択してください。"})} className="border border-gray-300 p-2 rounded">
                        {gradeType.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                        </select>
                    {errors.grade && <p className="text-red-500 text-sm">{errors.grade.message}</p>}
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">体験日</label>
                    <input type="date" {...register("trialDate", {required: "体験日を入力してください。"})} className="border border-gray-300 p-2 rounded" />
                    {errors.trialDate && <p className="text-red-500 text-sm">{errors.trialDate.message}</p>}
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">連絡先</label>
                    <input {...register("mail", {required: "連絡先を入力してください。", pattern:{value:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message:"メール形式で入力してください。" }})} className="border border-gray-300 p-2 rounded" placeholder="xxx@xxco.jp" />
                    {errors.mail && <p className="text-red-500 text-sm">{errors.mail.message}</p>}
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                    <label className="mb-2 text-semibold md:mb-0 w-32 font-midium">備考</label>
                    <textarea {...register("message")} className="border border-gray-300 p-2 rounded"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 p-2 rounded text-white ">送信</button>
            </form>
        </div>
    );
}