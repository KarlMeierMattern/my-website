import Image from "next/image";
import Card from "@/components/card";
import profilePic from "./public/images/profilePic.png"

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[1fr_1fr_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="row-start-1 col-start-1 gap-8 items-center sm:items-start">
        <div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-5xl">Welcome</h1>
          <Image
            className="rounded-3xl m-16"
            src={profilePic}
            width={300}
            height={300}
            alt="Picture of the author"
          />
          {/* <Button></Button> */}
        </div>
      </div>
      <div className="row-start-1 col-start-2 gap-8 items-center sm:items-start">
        <Card>Hey</Card>
      </div>
      <div className="row-start-2 col-start-2 gap-8 items-center sm:items-start">
        <Card>Hey</Card>
      </div>
      <div className="row-start-3 col-start-2 gap-8 items-center sm:items-start">
        <Card>Hey</Card>
      </div>
      <div className="row-start-1 col-start-3 gap-8 items-center sm:items-start">
        <Card>Hey</Card>
      </div>
      <div className="row-start-2 col-start-3 gap-8 items-center sm:items-start">
        <Card>Hey</Card>
      </div>
      <div className="row-start-3 col-start-3 gap-8 items-center sm:items-start">
        <Card>Hey</Card>
      </div>

    </div>
  );
}
