import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET(req: NextRequest) {
  await connectDB();
  const searchParams = req.nextUrl.searchParams;
  const developerId = searchParams.get("developerId");

    const query: any = {};

    if (developerId) {
      query.developerId = developerId;
    }

  const projects = await Project.find(query);

  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();
  const newProject = await Project.create(data);

  return NextResponse.json(newProject);
}