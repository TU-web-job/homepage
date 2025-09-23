"use client"

import { useForm } from "react-hook-form";
import { db } from "../../../lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type memberData = {
    firstName: string,
    lastName: string,
    parentName: string,
    grade: string,
    age: string,
    postCode: string,
    address: string,
    phone: string,
    mail:string,
}


const gradeType = [
    "小学生未満","低学年","中学年", "高学年"
];

export default function MemberConfirm(){
const {register, handleSubmit, formState:{ errors }, reset, } = useForm<memberData>();
const onSubmit = async (data: memberData) => {
    console.log("check", data);
    try {
        await addDoc(collection(db,"memberList"),{
            createdAt: serverTimestamp(),
            firstName: data.firstName,
            lastName: data.lastName,
            parentName: data.parentName,
            grade: data.grade,
            age: data.age,
            address: `${data.postCode} ${data.address} `,
            phone: data.phone,
            mail: data.mail,
            flg: 0,
        });

        alert("登録しました。");
        reset();
    }catch(error){
        console.error(error);
        alert("送信できませんでした。");
    }
} 

    return(
        <div className="flex flex-col w-full p-4 m-2 rounded">
            <h1>スクール生登録</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-2">
                <nav>
                    <div>
                        <p>名字</p>
                        <input {...register("firstName", {required: "名字を入力してください。"})} className="border"/>
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <p>名前</p>
                        <input {...register("lastName", {required: "名前を入力してください。"})} className="border"/>
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>
                </nav>
                <nav>
                    <p>保護者名</p>
                    <input {...register("parentName", {required: "保護者名を入力してください。"})} className="border" />
                    {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName.message}</p>}
                </nav>
                <nav>
                    <p>年齢</p>
                    <input type="date" {...register("age", {required: "年齢を入力してください。"})} className="border" />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                </nav>
                <nav>
                    <p>在籍グループ</p>
                    <select {...register("grade", {required:"選択してください。"})} className="border border-gray-300 p-2 rounded">
                        {gradeType.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                    {errors.grade && <p className="text-red-500 text-sm">{errors.grade.message}</p>}
                </nav>
                <nav>
                    <p>郵便番号</p>
                    <input {...register("postCode", {required: "郵便番号を入力してください。",pattern: {value:/^\d{3}-\d{4}$/,message:"xxx-xxxxの形式で入力してください。"}})} className="border w-[80px]" placeholder="xxx-xxxx" inputMode="numeric"/>
                    <p>住所</p>
                    <input {...register("address", {required: "住所を入力してください。"})} className="border" placeholder="市区町村まで"/>
                </nav>
                <nav>
                    <p>電話番号</p>
                    <input {...register("phone", {required:"電話番号を入力してください。"})} className="border" placeholder="xxx-xxxx-xxxx" />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </nav>
                <nav>
                    <p>E-Mail</p>
                    <input type="email" {...register("mail", {required:"メールアドレスを入力してください。"})} className="border" />
                    {errors.mail && <p className="text-red-500 text-sm">{errors.mail.message}</p>}
                </nav>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">登録</button>
            </form>
        </div>
    );
}