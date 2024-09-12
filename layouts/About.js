import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, experience, skills, education, volunteering } = frontmatter;

  return (
    <section className="section mt-16">
      <div className="container text-center">
        {image && (
          <div className="mb-8">
            <Image
              src={image}
              width={1298}
              height={616}
              alt={title}
              className="rounded-lg"
              priority={true}
            />
          </div>
        )}
        {markdownify(title, "h1", "h1 text-left lg:text-[55px] mt-12")}

        <div className="content text-left">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        <div className="row mt-24 text-left lg:flex-nowrap">
          <div className="experience mt-10 lg:mt-0 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(experience.title, "h2", "section-title mb-12")}
              <ul className="row special-bullet">
                {experience?.list?.map((item, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"experience-" + index}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="skills mt-10 lg:mt-0 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(skills.title, "h2", "section-title mb-12")}
              <ul className="row special-bullet">
                {skills?.list?.map((skill, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"skills-" + index}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row mt-24 text-left lg:flex-nowrap">
          <div className="education mt-10 lg:mt-0 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(education.title, "h2", "section-title mb-12")}
              <ul className="row special-bullet">
                {education?.list?.map((degree, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"education-" + index}
                  >
                    {degree}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="volunteering mt-10 lg:mt-0 lg:col-6">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(volunteering.title, "h2", "section-title mb-12")}
              <ul className="row special-bullet">
                {volunteering?.events?.map((event, index) => (
                  <li
                    className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6"
                    key={"volunteering-" + index}
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
