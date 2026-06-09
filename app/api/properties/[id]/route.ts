import { NextResponse } from 'next/server';
import propertyData from '@/data/property.json';
import { connectDB } from "@/lib/mongodb";
import Property from "@/models/Property";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export async function GET(request: Request, context: Props) {
    try {
        // Await the entire params object first
        const params = await context.params;
        const property = propertyData.find(p => p.id === parseInt(params.id));

        if (!property) {
            return NextResponse.json(
                { success: false, message: 'Property not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: property });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function PUT(req: Request,{ params }: { params: Promise<{ id: string }> }) {
  await connectDB();

  try {
    const { id } = await params;
    const propertyForm = await req.json();

    const updatedProperty = await Property.findByIdAndUpdate(id, propertyForm, {
      new: true,
    });

    if (!updatedProperty) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedProperty);
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating Property", error },
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

    const deletedProperty = await Property.findByIdAndDelete(id);

    if (!deletedProperty) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Property deleted successfully",
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting Property", error },
      { status: 500 }
    );
  }
}