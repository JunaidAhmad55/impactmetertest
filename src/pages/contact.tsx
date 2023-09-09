import { Heading, Text } from "@/components";

const Contact = () => {
  const developerData = {
    email: "junaidahmad472963@gmail.com",
    linkedin: "https://www.linkedin.com/in/junaid404",
    phone: "+923015437067",
  };

  return (
    <div className="p-5">
      <div className="container mx-auto mt-10">
        <Heading restStyle="text-4xl font-bold" title="Contact Me" />
        <Text restStyle="pt-5" title=" You can reach me through the following channels:" />

        <ul className="list-disc list-inside text-gray-600 pl-4 mt-2">
          <li>
            <Heading restStyle="!text-xl !inline" title="Email : " />
            <Text restStyle="inline" title={developerData?.email} />
          </li>
          <li>
            <Heading restStyle="!text-xl !inline" title="LinkedIn : " />
            <Text restStyle="inline">
            <a
              href={developerData?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {developerData?.linkedin}
            </a>
            </Text>
          </li>
          <li>
            <Heading restStyle="!text-xl !inline" title="Phone # : " />
            <Text restStyle="inline" title={developerData.phone} />
          </li>
{/* 
          <li>
            LinkedIn:{" "}
            <a
              href={developerData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {developerData.linkedin}
            </a>
          </li>
          <li>Phone # : {developerData.phone}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
