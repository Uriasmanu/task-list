import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";


export default function Login() {
    return (
        <div className="flex w-full items-center justify-center h-[50%] relative top-20">
            <Tabs defaultValue="account" className="w-[18rem] sm:w-[40rem]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Login</TabsTrigger>
                    <TabsTrigger value="password">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card className=" w-full bg-white rounded-xl shadow-lg p-8 gap-0">

                        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Sign In</h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                                Sign In
                            </button>
                        </form>
                    </Card>
                </TabsContent>

                <TabsContent value="password">
                    <Card className=" w-full bg-white rounded-xl shadow-lg p-8 gap-0">

                        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Sign Up</h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                />
                            </div>

                            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                                Register
                            </button>
                        </form>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}