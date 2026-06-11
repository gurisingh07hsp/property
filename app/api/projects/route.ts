import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
  await connectDB();
  const projects = await Project.find();

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();
  const newProject = await Project.create(data);

  return NextResponse.json(newProject);
}