"use client"

import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

type Contact = {
    id: string,
    name: string,
    email: string,
    message: string,
    flg: number,
};

type Trial = {
    id: string,
    trialName: string,
    parentName: string,
    grade: string,
    trialDate: string,
    mail: string,
    message: string,
    trialFlg: number,
    checkFlg: number,
};


export default function Admin(){
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [trial, setTrial] = useState<Trial[]>([]);
    const [loading, setLoading] = useState(true);
    const [ view, setView ] = useState<"contacts" | "trial" | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const querySnapshot = await getDocs(collection(db, "contacts"));
            const data:Contact[] = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<Contact, "id">),
            }));
            setContacts(data);
        };

        const trialData = async () => {
            const querySnapshot = await getDocs(collection(db,"trial"));
            const data:Trial[] = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<Trial, "id">),
            }));
            setTrial(data);
        };
        Promise.all([loadData(),trialData()]).then(() => setLoading(false));
    }, []);

    const handleConfirm = async (id:string) => {
        try{
            const ref = doc(db, "contacts",id);
            await updateDoc(ref, { flg:1 });

            setContacts((prev) => 
            prev.map((c) => 
            c.id === id ? { ...c, flg: 1 } : c ));
        }catch(error){
            console.error("don't update", error);
            alert("更新できませんでした。");
        }
    };

    const trialConfirm = async (id:string) => {
        try{
            const ref = doc(db, "trial", id);
            await updateDoc(ref, { trialFlg : 1});

            setTrial((prev) => 
            prev.map((c) =>
            c.id === id ? {...c, trialFlg : 1} : c));
        }catch(error){
            console.error("trialCheck", error);
            alert("確認できませんでした。");
        }
    };

    const canselConfirm = async (id:string) => {
        try{
            const ref = doc(db, "trial", id);
            await updateDoc(ref, {trialFlg : 2});

            setTrial((prev) => 
            prev.map((c) => 
            c.id === id ? {...c, trialFlg : 2} : c));
        }catch(error){
            console.error("trialCheck", error);
            alert("更新できませんでした。");
        }
    };

    const checkConfirm = async (id:string) => {
        try{
            const ref = doc(db, "trial", id);
            await updateDoc(ref, {checkFlg : 1});

            setTrial((prev) => 
            prev.map((c) => 
            c.id === id ? {...c, checkFlg : 1} : c));
        }catch(error){
            console.error("check", error);
            alert("更新できませんでした。");
        }
    };

    if(loading) return <p>Loading now...</p>;

    return(
        <div className="flex flex-col justify-center items-center w-full p-4">
            <h2 className="text-2xl font-bold text-gray-600 mb-2">管理者ページ</h2>
            <section className="flex flex-row justify-center items-center">
                <label className="p-2 m-2"><input type="radio" name="list" onClick={() => setView("contacts")} />Contact List</label>
                <label className="p-2 m-2"><input type="radio" name="list" onClick={() => setView("trial")} />Trial List</label>
            </section>
            {view === "contacts" && (
                <div className="w-full border border-gray-800 bg-gray-300 p-2 mb-4">
                    <h3 className="border-b-1 border-white font-semibold text-xl p-2 mb-4">お問い合わせ一覧</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {contacts.map(contact => (
                            <div key={contact.id} className="flex flex-col border rounded-lg shadow-md bg-white p-2 mb-4">
                                <p><span className="font-semibold">Name : </span>{contact.name}</p>
                                <p><span className="font-semibold">E-Mail : </span>{contact.email}</p>
                                <p><span className="font-semibold">Message : </span>{contact.message}</p>
                                {contact.flg === 0 && (
                                    <button className="border bg-gray-300 text-white rounded mt-2" onClick={() => handleConfirm(contact.id)}>確認</button>
                                )}
                                {contact.flg === 1 && (
                                    <p className="text-green-600 font-semibold mt-2">✅確認済</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {view === "trial" && (
                <div className="w-full bg-gray-300 border border-blue-300 p-2 mb-4">
                <h3 className="font-semibold text-xl p-2 mb-4">体験者一覧</h3>
                {trial.map((item) => (
                    <div key={item.id} className="flex flex-col p-2 mb-4 border-b-2 border-white">
                        <p><span className="font-semibold">体験者名 : </span>{item.trialName}</p>
                        <p><span className="font-semibold">保護者名 : </span>{item.parentName}</p>
                        <p><span className="font-semibold">学年 : </span>{item.grade}</p>
                        <p><span className="font-semibold">体験希望日 : </span>{item.trialDate}</p>
                        <p><span className="font-semibold">連絡先 : </span>{item.mail}</p>
                        <p><span className="font-semibold">備考 : </span>{item.message}</p>
                        <p className="font-semibold">申込 : 
                        {item.checkFlg === 0 && (
                            <button className="border-white bg-yellow-200 p-2 rounded font-light" onClick={() => checkConfirm(item.id)}>承認</button>
                        )}
                        {item.checkFlg === 1 && (
                            <span className="font-light">✅承認済</span>
                        )}
                        </p>
                        <p className="font-semibold">体験 : 
                            {item.trialFlg === 0 && (
                                <span>
                                <button onClick={() => trialConfirm(item.id)} className="bg-blue-200 p-2 rounded font-light m-2">参加</button>
                                <button onClick={() => canselConfirm(item.id)} className="bg-red-500 text-white p-2 font-light rounded m-2">不参加</button>
                                </span>
                            )}
                            {item.trialFlg === 1 && (
                                <span className="font-light">✅参加済</span>
                            )}
                            {item.trialFlg === 2 && (
                                <span className="text-red-500 font-light">❎辞退</span>
                            )}
                        </p>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}