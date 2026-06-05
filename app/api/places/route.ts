import { NextRequest, NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import Property from "@/models/Property";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const q = req.nextUrl.searchParams.get("q")?.trim();

    if (!q) {
      return NextResponse.json([]);
    }

    const bedroomMatch = q.match(/(\d+)\s*bhk/i);

    const query: any = {
      $or: [
        { name: { $regex: q, $options: "i" } },
        { city: { $regex: q, $options: "i" } },
        { state: { $regex: q, $options: "i" } },
      ],
    };

    if (bedroomMatch) {
    query.$or.push({
        "additionalInformation.bedrooms": Number(bedroomMatch[1]),
    });
    }

const properties = await Property.find(query).limit(10);

    const suggestions = properties.map((property) => {
      const bedrooms =
        property.additionalInformation?.bedrooms || 0;

      if (bedrooms > 0 && property.city) {
        return `${bedrooms} BHK Property in ${property.city}`;
      }

      if (property.city) {
        return `${property.name} in ${property.city}`;
      }

      return property.name;
    });

    return NextResponse.json([...new Set(suggestions)]);
  } catch (error) {
    return NextResponse.json(
      { message: "Search Error", error },
      { status: 500 }
    );
  }
}









// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//       try {
//          const input = req.nextUrl.searchParams.get("input");
//         console.log("input : ", input);
//         const response = await fetch(
//         `https://api.locationiq.com/v1/autocomplete?key=${process.env.LOCATIONIQ_KEY}&q=${input}&limit=5&dedupe=1&countrycodes=in`
//         );
        
//         const data = await response.json();
//         console.log("data : ", data);
//         if(!data.error){
//         return NextResponse.json({
//         success: true,
//         predictions: data
//         });
//         }
//     } catch(error){
//         return NextResponse.json(error);
//     }
// }