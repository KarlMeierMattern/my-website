import Image from "next/image";
import profilePic from "@/app/public/images/profilePic.png"
import Card from '@/components/card'

export default function Sidebar() {
  return (
    <Card>
      <div className="flex flex-col w-full h-full space-y-4">
        <div className="w-full aspect-square flex items-center relative justify-center">
          <Image
            className="rounded-3xl object-cover"
            width={300}
            height={300}
            src={profilePic}
            alt="Picture of the author"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="p-2 bg-gray-100 rounded">Email</div>
          <div className="p-2 bg-gray-100 rounded">Phone</div>
          <div className="p-2 bg-gray-100 rounded">Birthday</div>
          <div className="p-2 bg-gray-100 rounded">Location</div>
        </div>
      </div>
    </Card>
      
  );
}
