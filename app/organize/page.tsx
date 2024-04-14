"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Register() {
  const [title, setTilte] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [catlog, setCatlogs] = useState("");
  const [error, setError] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const createCatlog = () => {
    let words = catlog.split(" ");

    // Filter out words with hashtags
    let hashtags = words.filter((word) => word.startsWith("#"));

    // Remove the "#" symbol from hashtags
    hashtags = hashtags.map((hashtag) => hashtag.slice(1));

    return hashtags;
  };

  const createEvent = async () => {
    // createDocument({
    //   title,
    //   description,
    //   image: "jsjks",
    //   userId: "kksks",
    //   catlog: createCatlog(),
    //   date: "kkks",
    // });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-600 py-24 px-7">
      <h2 className="text-5xl font-extrabold text-white">{`Register for Farmer's Market`}</h2>
      <p className="mt-2 text-sm text-white">
        {`Register your farmer's market and organize your products to reach more customers!`}
      </p>
      <hr className="bg-white h-[2px] my-6 w-full" />
      <div className="flex flex-col w-9/12 space-y-8">
        <div className="flex flex-col space-y-0.5 justify-center items-start">
          <label className="text-lg font-semibold text-white ">Heading</label>
          <Input
            type="text"
            placeholder="Enter The Title"
            value={title}
            onChange={(e) => {
              setTilte(e.target.value);
            }}
            className="bg-white w-full text-black outline-none border border-green-400 rounded-sm font-semibold"
          />
        </div>
        <div className="flex flex-col space-y-0.5 justify-center items-start">
          <label className="text-lg font-semibold text-white ">
            Description
          </label>
          <Textarea
            rows={10}
            placeholder="Enter The Title"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="bg-white w-full text-black outline-none border border-green-400 rounded-sm font-semibold"
          />
        </div>
        <div className="flex flex-col space-y-0.5 justify-center items-start">
          <label className="text-lg font-semibold text-white ">Image</label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-white w-full text-black outline-none border border-green-400 rounded-sm font-semibold"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 max-w-full h-auto"
            />
          )}
        </div>
        <div className="flex flex-col space-y-0.5 justify-center items-start">
          <label className="text-lg font-semibold text-white ">Catlog</label>
          <span className="text-xs text-white">
            use # tag to add catlogs in below text area example #cocnut #nut
          </span>
          <Textarea
            rows={10}
            placeholder="Enter The Title"
            value={catlog}
            onChange={(e) => {
              setCatlogs(e.target.value);
            }}
            className="bg-white w-full text-black outline-none border border-green-400 rounded-sm font-semibold"
          />
        </div>
        <div className="flex w-full justify-center">
          <Button
            className="bg-white text-green-600 text-lg font-sans py-3 w-72 "
            onClick={() => createEvent()}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
