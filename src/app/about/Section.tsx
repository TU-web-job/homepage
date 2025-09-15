"use client"
import { GiSoccerKick } from "react-icons/gi";
import dynamic from "next/dynamic";

const Access = dynamic(() => import("@/app/about/Access"), {
    ssr: false,
});

export default function Section(){
    return(
        <div className="flex flex-col p-4 justify-center items-center w-full mt-4">
            <h1 className="flex flex-row gap-2 text-xl sm:text-2xl md:text-4xl font-bold">自己紹介<GiSoccerKick /></h1>
            <div className="flex flex-row mt-4 border-2 border-gray-400 p-4 w-full">
                <div className="w-[50%] p-2">
                    <h3 className="border-b-2 border-gray-200 font-semibold mb-2">挨拶</h3>
                    <p>皆様、初めまして。〇〇と申します！</p>
                    <p>小学生からサッカーをやり始め、今までの経験を未来ある子供達に伝えたくコーチなりました。</p>
                </div>
                <div className="w-[50%] p-2">
                    <img src="/images/child.jpg" alt="自己紹介" />
                </div>
            </div>
            <div className="flex flex-row mt-4 border-2 border-gray-400 p-4 w-full">
                <div className="w-[50%] p-2">
                    <img src="/images/parent.jpg" alt="学校" />
                </div>
                <div className="w-[50%] p-2">
                    <h3 className="border-b-2 border-gray-200 font-semibold mb-2">経歴</h3>
                    <p>小学校 : 地元の少年団</p>
                    <p>中学校 : 公立中学校 サッカー部</p>
                    <p>高校 : 某私立高校 サッカー部</p>
                    <p>専門学校 : Japanサッカーカレッジ</p>
                    <p>卒業後 : ABC東京、Eberwalde(Deutschland)、チーバFC</p>
                </div>
            </div>
            <div className="flex flex-row mt-4 border-2 border-gray-400 p-4 w-full">
                <div className="w-[50%] p-2">
                    <h3 className="border-b-2 border-gray-200 font-semibold mb-2">このスクールで叶うこと</h3>
                    <p>基礎的なボールコントール、個々のスキルアップ、一対一のスキル以上をどこで使用するかの判断力を選手が考えて身につけていけるようにしていきます！</p>
                </div>
                <div className="w-[50%] p-2">
                    <img src="/images/1on1.jpg" alt="サッカー" />
                </div>
            </div>
            <div className="flex flex-row mt-4 border-2 border-gray-400 p-4 w-full">
                <div className="w-[50%] p-2">
                    <Access />
                </div>
                <div className="w-[50%] p-2">
                    <h3 className="border-b-2 border-gray-200 font-semibold mb-2">活動場所 / アクセス</h3>
                    <p>活動場所 : 千葉県船橋市習志野台7-5-1</p>
                    <p>アクセス : 船橋日大前駅 徒歩10分</p>
                </div>
            </div>
        </div>
    );
}