import connecMongoDB from "@/app/_lib/mongodb";
import Task from "@/app/_models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
    const { name, description, completed } = await request.json();
    await connecMongoDB();
    await Task.create({ name, description, completed });
    return NextResponse.json({ message: 'Task Created' }, { status: 201 })
}

export async function GET() {
    await connecMongoDB();
    const tasks = await Task.find();
    return NextResponse.json({
        tasks
    })
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');
    await connecMongoDB();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Task deleted' }, { status: 200 });
}