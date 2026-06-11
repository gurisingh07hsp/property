import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Property from "@/models/Property";




export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const searchParams = req.nextUrl.searchParams;

    const filter = JSON.parse(
      searchParams.get("filter") || "{}"
    );

    const pagination = JSON.parse(
      searchParams.get("pagination") || "{}"
    );

    const agentId = searchParams.get("agentId");

    const query: any = {};

    // -------------------------
    // TEXT FILTERS
    // -------------------------

  // query.city = {
  //   $regex: "^ludhiana$",
  //   $options: "i",
  // }

  // query.category = {
  //   $regex: "^kothi$",
  //   $options: "i",
  // }

    if (filter.keyword) {
      query.name = {
        $regex: filter.keyword,
        $options: "i",
      };
    }

    if (filter.city) {
      if (filter.city) {
        query.city = {
        $regex: filter.city,
        $options: "i",
        }
      }
    }

    // if (filter.city) {
    //   if (filter.city) {
    //     query.city = {
    //     $regex: `^${filter.city}$`,
    //     $options: "i",
    //     }
    //   }
    // }

    if (filter.state) {
      query.state = filter.state;
    }

    if (filter.status) {
      query.status = filter.status;
    }

    if (filter.propertyType) {
      if(filter.propertyType == '1 bhk'){
        query["additionalInformation.bedrooms"] = {
          $gte: 0,
          $lte: 1,
        };
      }else if(filter.propertyType == '2 bhk'){
          query["additionalInformation.bedrooms"] = {
          $gte: 1,
          $lte: 2,
        };
      }else if(filter.propertyType == '3 bhk'){
          query["additionalInformation.bedrooms"] = {
          $gte: 2,
          $lte: 3,
        };
      }else if(filter.propertyType == '4 bhk'){
          query["additionalInformation.bedrooms"] = {
          $gte: 3,
          $lte: 4,
        };
      }else{
        query.category = {
          $regex: `^${filter.propertyType}$`,
          $options: "i",
        };
      }
    }
    

    // -------------------------
    // PRICE FILTER
    // -------------------------

    // query["propertyPrices.propertyPrice"] = {
    //   $gte: filter.price?.min || 0,
    //   $lte: filter.price?.max || 999999999,
    // };

    // -------------------------
    // ROOMS FILTER
    // -------------------------

    // query["additionalInformation.rooms"] = {
    //   $gte: filter.rooms?.min || 0,
    //   $lte: filter.rooms?.max || 100,
    // };

    // query["additionalInformation.bedrooms"] = {
    //   $gte: filter.bedrooms?.min || 0,
    //   $lte: filter.bedrooms?.max || 100,
    // };

    // query["additionalInformation.bathrooms"] = {
    //   $gte: filter.bathrooms?.min || 0,
    //   $lte: filter.bathrooms?.max || 100,
    // };

    // query["additionalInformation.garages"] = {
    //   $gte: filter.garages?.min || 0,
    //   $lte: filter.garages?.max || 100,
    // };

    // -------------------------
    // SIZE FILTER
    // -------------------------

    // query["additionalInformation.propertySize"] = {
    //   $gte: filter.size?.min || 0,
    //   $lte: filter.size?.max || 999999,
    // };

    // -------------------------
    // AMENITIES FILTER
    // -------------------------

    if (filter.amenities?.length > 0) {
      query.amenities = {
        $all: filter.amenities,
      };
    }

    // -------------------------
    // AGENT FILTER
    // -------------------------

    if (agentId) {
      query.agent = agentId;
    }

    // -------------------------
    // SORTING
    // -------------------------

    let sortOption: any = {
      createdAt: -1,
    };

    switch (pagination.sort) {
      case "price-low":
        sortOption = {
          "propertyPrices.propertyPrice": 1,
        };
        break;

      case "price-high":
        sortOption = {
          "propertyPrices.propertyPrice": -1,
        };
        break;

      case "newest":
        sortOption = {
          createdAt: -1,
        };
        break;

      case "oldest":
        sortOption = {
          createdAt: 1,
        };
        break;

      default:
        break;
    }

    // -------------------------
    // PAGINATION
    // -------------------------

    const start = pagination.perPage?.start || 0;

    const limit =
      (pagination.perPage?.end || 10) - start;

    // -------------------------
    // FETCH
    // -------------------------

  console.log("filter", filter);
  console.log("query", query);

    const properties = await Property.find(query)
      .populate("agent")
      .sort(sortOption)
      .skip(start)
      .limit(limit);

    // Total count
    const total = await Property.countDocuments(query);

    return NextResponse.json({
      properties,
      total,
    });

  } catch (error) {
    return NextResponse.json(
      {
        message: "Property Fetch Error",
        error,
      },
      { status: 500 }
    );
  }
}




export async function POST(req: Request) {
  await connectDB();

  const data = await req.json();
  const property = await Property.create(data);

  return NextResponse.json(property);
}