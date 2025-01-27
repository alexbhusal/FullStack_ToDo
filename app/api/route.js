import { NextResponse } from "next/server";
import { ConnectDB } from "./lib/config/db";
import ToDoModel from "./lib/models/TodoModel";

const LoadDB =async()=>{
   await ConnectDB();
}
LoadDB();

export async function GET(request){
    const todos= await ToDoModel.find({});
    return NextResponse.json({todos})
}
export async function POST(request){
    const {title,description}= await request.json();
    await ToDoModel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo Created"})

}

export async function DELETE(request){
    const mongoID = await request.nextUrl.searchParams.get('mongoID');
    await ToDoModel.findByIdAndDelete(mongoID);
    return NextResponse.json({msg:"Todo Deleted"})
}
export async function PUT(request){
    const mongoID = await request.nextUrl.searchParams.get('mongoID');
    await ToDoModel.findByIdAndUpdate(mongoID,{
        $set:{
            isCompleted:true,
            // title:"alex"
        }
    });
    return NextResponse.json({msg:"Todo Completed "})
}