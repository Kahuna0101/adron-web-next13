import { ObjectId } from "mongodb";
import clientPromise from "../mongodb";

export const getPosts = async () => {
  try {
    const mongoClient = await clientPromise;

    const query = {};

    const data = await mongoClient
      .db()
      .collection("posts")
      .find(query)
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getPromoPosts = async () => {
  try {
    const mongoClient = await clientPromise;

    const limit = 3;
    const sort = { date: -1 };
    const query = { "tags" : "promos" };
    const projection = { photo: 1, title: 1 }

    const data = await mongoClient
      .db()
      .collection("posts")
      .find(query)
      .project(projection)
      .sort(sort)
      .limit(limit)
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getRecentPosts = async () => {
  try {
    const mongoClient = await clientPromise;

    const limit = 5;
    const sort = { date: -1 };
    const query = {};

    const data = await mongoClient
      .db()
      .collection("posts")
      .find(query)
      .sort(sort)
      .limit(limit)
      .toArray();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (id) => {
  try {
    const mongoClient = await clientPromise;

    const data = await mongoClient
      .db()
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
