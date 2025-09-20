"use client"

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";

export default function Admin(){
    const [contacts, setContacts] = useState<any[]>([]);
    const [trial, setTrial] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [ view, setView ] = useState<"contacts" | "trial" | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const querySnapshot = await getDocs(collection(db, "contacts"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setContacts(data);
        };

        const trialData = async () => {
            const querySnapshot = await getDocs(collection(db,"trial"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTrial(data);
        };
        Promise.all([loadData(),trialData()]).then(() => setLoading(false));
    }, []);

    if(loading) return <p>Loading now...</p>;

    return(
        <div className="flex flex-col justify-center items-center w-full p-4">
            <h2 className="text-2xl font-bold text-gray-600 mb-2">管理者ページ</h2>
            <section className="flex flex-row justify-center items-center">
                <label className="p-2 m-2"><input type="radio" name="list" onClick={() => setView("contacts")} required />Contact List</label>
                <label className="p-2 m-2"><input type="radio" name="list" onClick={() => setView("trial")} />Trial List</label>
            </section>
            {view === "contacts" && (
                <div className="w-full border border-gray-400 p-2 mb-4">
                    <h3 className="font-semibold text-xl p-2 mb-4">お問い合わせ一覧</h3>
                    {contacts.map(contact => (
                        <ul key={contact.id} className="flex flex-col p-2 mb-4">
                            <li>Name : {contact.name}</li>
                            <li>E-Mail : {contact.email}</li>
                            <li>Message : {contact.message}</li>
                        </ul>
                    ))}
                </div>
            )}
            {view === "trial" && (
                <div className="w-full border border-graey-400 p-2 mb-4">
                <h3 className="font-semibold text-xl p-2 mb-4">体験者一覧</h3>
                {trial.map((item) => (
                    <ul key={item.id} className="flex flex-col p-2 mb-4 border-b border-gray-300">
                        <li>体験者名 : {item.trialName}</li>
                        <li>保護者名 : {item.parentName}</li>
                        <li>学年 : {item.grade}</li>
                        <li>体験希望日 : {item.trialDate}</li>
                        <li>連絡先 : {item.mail}</li>
                        <li>備考 : {item.message}</li>
                    </ul>
                ))}
            </div>
            )}
            
        </div>
    );
}