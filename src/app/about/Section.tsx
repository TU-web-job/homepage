"use client"
import { GiSoccerKick } from "react-icons/gi";
import Access from "@/app/about/Access";

export default function Section(){
    return(
        <div className="flex flex-col p-4 justify-center items-center w-full mt-4">
            <h1 className="flex flex-row gap-2 text-xl sm:text-2xl md:text-4xl font-bold">スクール概要<GiSoccerKick /></h1>
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
                        <p className="border-b-2 border-gray-200">レギュラーシーズン</p>
                        <table className="table w-full p-2">
                            <thead>
                            <tr className="border-1 border-gray-200 bg-gray-200">
                                <th>学年</th>
                                <th>月</th>
                                <th>火</th>
                                <th>水</th>
                                <th>木</th>
                                <th>金</th>
                                <th>土</th>
                                <th>日</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border-1 border-gray-200 justify-center items-center">
                                <td>1.2年生</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr className="border-1 border-gray-200 justify-center items-center">
                                <td>3.4年生</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr className="border-1 border-gray-200 justify-center items-center">
                                <td>5.6年生</td>
                                <td>⚪︎</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            </tbody>
                        </table>
                        <p className="border-b-2 border-gray-200 mt-2">バケーションシーズン</p>
                        <table className="table flex justify-center items-center w-full p-2">
                        <thead>
                            <tr className="border-1 border-gray-200 bg-gray-200">
                                <th>学年</th>
                                <th>月</th>
                                <th>火</th>
                                <th>水</th>
                                <th>木</th>
                                <th>金</th>
                                <th>土</th>
                                <th>日</th>
                            </tr>
                            </thead>
                            <tbody className="items-center justify-center">
                            <tr className="border-1 border-gray-200">
                                <td>1.2年生</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr className="border-1 border-gray-200">
                                <td>3.4年生</td>
                                <td>⚪︎</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>-</td>
                            </tr>
                            <tr className="border-1 border-gray-200">
                                <td>5.6年生</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>⚪︎</td>
                                <td>-</td>
                                <td>⚪︎</td>
                                <td>⚪︎</td>
                                <td>-</td>
                            </tr>
                            </tbody>
                        </table>
                </div>
                <div className="w-[50%] p-2">
                    <h3 className="border-b-2 border-gray-200 font-semibold mb-2">開催日</h3>
                    <p>レギュラーシーズン</p>
                    <p>曜日 : </p>
                    <p>時間 : </p>
                    <p>バケーションシーズン(春、夏、冬)</p>
                    <p>曜日 : </p>
                    <p>時間 : </p>
                </div>
            </div>
            <div className="flex flex-row mt-4 border-2 border-gray-400 p-4 w-full">
                <div className="w-[50%] p-2">
                    <h3 className="border-b-2 border-gray-200 font-semibold mb-2">活動場所 / アクセス</h3>
                    <p>活動場所 : 千葉県船橋市習志野台7-5-1</p>
                    <p>アクセス : 船橋日大前駅 徒歩10分</p>
                </div>
                <div className="w-[50%] p-2">
                    <Access />
                </div>
            </div>
        </div>
    );
}