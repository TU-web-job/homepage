"use client"

import { collection, getDocs, doc} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../lib/firebase";


type memberList = {
    id:string,
    firstName:string,
    lastName: string,
    parentName: string,
    grade:string,
    age:string,
    address: string,
    mail: string,
    phone: string,
    flg:number,
};

export default function Member(){

    const [view] = useState<"memberList">("memberList");
    const [memberList, setMemberList] = useState<memberList[]>([]);
    const [loading, setLoading] = useState(true);
    console.log("check",memberList);

    useEffect(() => {
        const loadData = async () => {

        
        const querySnapshot = await getDocs(collection(db, "memberList"));
        const data: memberList[] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as Omit<memberList,"id">),
        }));
        setMemberList(data);
    };
    Promise.all([loadData()]).then(() => setLoading(false));
    },[]);


    return(
        <div className="flex flex-col justify-center items-center p-4 m-2 rounded">
            <h2 className="font-bold text-4xl">スクール生一覧</h2>
            <div className="w-full bg-orange-200 m-2 p-2 rounded">
                <h3>小学生未満クラス</h3>
                {view === "memberList" && (
                    <div className="grid grid-cols-1 md:grid-cols-3" >
                    {memberList.filter(member => member.grade === "小学生未満").map(list => (
                        <section key={list.id} className="border shadow bg-white p-2 rounded transion">
                        <p>生徒名 : {list.firstName} {list.lastName}</p>
                        <p>保護者名 : {list.firstName} {list.parentName}</p>
                        <p>誕生日 : {list.age}</p>
                        <p>対象クラス : {list.grade}</p>
                        <p>住所 : 〒{list.address}</p>
                        <p>メールアドレス : {list.mail}</p>
                        <p>電話番号 : {list.phone}</p>
                    </section>
                    ))}
                    </div>
                )}
            </div>
            <div className="w-full bg-blue-200 m-2 p-2 rounded">
                <h3>低学年クラス</h3>
                {view === "memberList" && (
                    <div className="grid grid-cols-1 md:grid-cols-3">
                    {memberList.filter(member => member.grade === "低学年").map(list => (
                        <section key={list.id} className="border shadow bg-white p-2 rounded transion">
                        <p>生徒名 : {list.firstName} {list.lastName}</p>
                        <p>保護者名 : {list.firstName} {list.parentName}</p>
                        <p>誕生日 : {list.age}</p>
                        <p>対象クラス : {list.grade}</p>
                        <p>住所 : 〒{list.address}</p>
                        <p>メールアドレス : {list.mail}</p>
                        <p>電話番号 : {list.phone}</p>
                    </section>
                    ))}
                    </div>
                )}
            </div>
            <div className="w-full bg-red-200 m-2 p-2 rounded">
                <h3>中学年クラス</h3>
                {view === "memberList" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
                    {memberList.filter(member => member.grade === "中学年").map(list => (
                        <section key={list.id} className="border shadow bg-white p-2 rounded transion">
                        <p>生徒名 : {list.firstName} {list.lastName}</p>
                        <p>保護者名 : {list.firstName} {list.parentName}</p>
                        <p>誕生日 : {list.age}</p>
                        <p>対象クラス : {list.grade}</p>
                        <p>住所 : 〒{list.address}</p>
                        <p>メールアドレス : {list.mail}</p>
                        <p>電話番号 : {list.phone}</p>
                    </section>
                    ))}
                    </div>
                )}
            </div>
            <div className="w-full bg-gray-200 m-2 p-2 rounded">
                <h3>高学年クラス</h3>
                {view === "memberList" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2">
                    {memberList.filter(member => member.grade === "高学年").map(list => (
                        <section key={list.id} className="border shadow bg-white p-2 rounded transion">
                            <p>生徒名 : {list.firstName} {list.lastName}</p>
                            <p>保護者名 : {list.firstName} {list.parentName}</p>
                            <p>誕生日 : {list.age}</p>
                            <p>対象クラス : {list.grade}</p>
                            <p>住所 : 〒{list.address}</p>
                            <p>メールアドレス : {list.mail}</p>
                            <p>電話番号 : {list.phone}</p>
                        </section>
                    ))}
                    </div>
                )}
            </div>
        </div>
    );
}