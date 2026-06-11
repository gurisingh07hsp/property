import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";


export async function GET(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params; // ✅ FIX HERE

    const project = await Project.findOne({slug: id});

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching Blog", error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params;
    const data = await req.json();

    const updatedProject = await Project.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating Project", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB();

  try {
    const { id } = await params; // ✅ FIX HERE

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting Project", error },
      { status: 500 }
    );
  }
}