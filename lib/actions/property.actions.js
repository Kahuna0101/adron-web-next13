import { ObjectId } from "mongodb";
import clientPromise from "../mongodb";

export const getProperties = async () => {
  try {
    const mongoClient = await clientPromise;

    const query = {};

    const projection = {
      location: 1,
      title: 1,
      propertyType: 1,
      propertyStatus: 1,
      price: 1,
      area: 1,
      rooms: 1,
      baths: 1,
      images: 1,
    };

    const data = await mongoClient
      .db()
      .collection("properties")
      .find(query)
      .project(projection)
      .sort({ date: "desc" })
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getFeaturedProperties = async () => {
  try {
    const mongoClient = await clientPromise;

    const query = {};

    const projection = {
      location: 1,
      title: 1,
      propertyType: 1,
      propertyStatus: 1,
      price: 1,
      area: 1,
      rooms: 1,
      baths: 1,
      images: 1,
    };
    const limit = 5;

    const data = await mongoClient
      .db()
      .collection("properties")
      .find(query)
      .project(projection)
      .sort({ date: "desc" })
      .limit(limit)
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getRecentProperties = async () => {
  try {
    const mongoClient = await clientPromise;

    const limit = 5;
    const sort = { date: -1 };
    const query = {};

    const data = await mongoClient
      .db()
      .collection("properties")
      .find(query)
      .sort(sort)
      .limit(limit)
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getProperty = async (id) => {
  try {
    const mongoClient = await clientPromise;

    const data = await mongoClient
      .db()
      .collection("properties")
      .findOne({ _id: new ObjectId(id) });

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
