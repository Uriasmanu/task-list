import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartNoAxesGantt, CircleGauge, OctagonAlert } from "lucide-react";

export default function TaskForm() {
    return (
        <div className="page-container ">
            <div className="w-[98%] flex items-center flex-col h-auto gap-6 py-3">
                <div className="heading text-center font-bold text-2xl text-gray-800 bg-white">
                    <h2>New Task</h2>
                </div>

                <div className="editor w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl  gap-3">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <input className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" placeholder="Title" type="text" />

                        <Select>
                            <SelectTrigger className="w-[180px] border border-gray-300 rounded-md p-2">
                                <SelectValue placeholder="Priority" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem className="w-full flex justify-between" value="urgent">Urgent <OctagonAlert /></SelectItem>
                                <SelectItem className="flex justify-between" value="medium">Medium <CircleGauge /></SelectItem>
                                <SelectItem className="flex justify-between" value="low">Low <ChartNoAxesGantt /></SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    <textarea className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" placeholder="Describe everything about this post here"></textarea>

                    <div className="icons flex text-gray-500 m-2">
                        <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                    </div>
                </div>

                <div className="buttons flex justify-end">
                    <button className="border border-indigo-500 p-2 px-4 font-semibold text-white bg-indigo-500 hover:bg-indigo-600">
                        Criate
                    </button>
                </div>
            </div>
        </div>
    )
}