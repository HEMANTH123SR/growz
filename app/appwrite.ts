import { Client, Databases } from "appwrite";
const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("661bd738da6b38974740");

function generateRandomNumber() {
  let randomNumber = "";
  for (let i = 0; i < 32; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }
  return randomNumber;
}

export const createDocument = async ({
  title,
  description,
  date,
  userId,
  catlog,
  image,
}: {
  title: String;
  description: String;
  date: String;
  userId: String;
  catlog: String[];
  image: String;
}) => {
  const response = await databases.createDocument(
    "661bd836dfe2f3c248f6",
    "661bd847e050a588b305",
    generateRandomNumber(),
    { title, description, date, userId, catlog, image }
  );
  console.log(response);
};
