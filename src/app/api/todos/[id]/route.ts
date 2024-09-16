import connecMongoDB from "@/app/_lib/mongodb";
import Task from "@/app/_models/topic";
import { NextResponse } from "next/server";

export async function PUT(request: Request, { params }: any): Promise<any> {
    const { id } = params;
    const { name, description, completed }: any = request.json();
    await connecMongoDB();
    await Task.findByIdAndUpdate(id, { name, description, completed })
    return NextResponse.json({ message: 'Task Update' }, { status: 200 })
}

export async function GET(request : Request , {params} : any) : Promise<any> {
    const {id} = params;
    await connecMongoDB()
    const findTasksById = await Task.findOne(id);
    return NextResponse.json({findTasksById})
}