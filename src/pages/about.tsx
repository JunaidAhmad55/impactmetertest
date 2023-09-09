import { developerData } from "@/constants/detail";
import { Heading, Text } from "@/components";

const About = () => {
  return (
    <div className="p-5">
      <div className="container mx-auto mt-10">
        <Heading restStyle="text-4xl font-bold" title="Welcome !" />
        <Heading title="Name" />
        <Text title={developerData?.name} />
        <Heading title="About" />
        <Text title={developerData?.about} />
        <Heading title="Skills" />
        <ul className="list-disc list-inside text-gray-600 pl-4 mt-2">
          {developerData?.skills.map((skill, index) => (
            <li key={index}>
              <Text restStyle="inline" title={skill} />
            </li>
          ))}
        </ul>
        <Heading title="Why Me"/>
        <Text title={developerData?.whyMe} />
        <Heading title="Experience"/>
        <ul className="list-disc list-inside text-gray-600 pl-4 mt-2">
          {developerData?.experience.map((exp, index) => (
            <li key={index}>
              <strong>
                {exp.position} at {exp.company}
              </strong>
              <br />
              {exp.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
