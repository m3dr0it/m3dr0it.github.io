import Image from "next/image";

const About = () => {
  return (
    <div className="p-6 w-screen h-screen md:w-5/6 mx-auto lg:w-5/12">
      <br />
      <h1 className=" font-semibold text-2xl">Stacks</h1>
      <div className=" flex flex-row my-4">
        <a href="#">
          <Image
            className="mx-4 hover:"
            priority
            src="/assets/icons/java.png"
            height={80}
            width={80}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4 hover:"
            priority
            src="/assets/icons/ts.png"
            height={70}
            width={70}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4"
            priority
            src="/assets/icons/springboot.png"
            height={70}
            width={150}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4 mt-5"
            priority
            src="/assets/icons/quarkus.png"
            height={200}
            width={150}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4"
            priority
            src="/assets/icons/nexttjs.png"
            height={100}
            width={100}
          />
        </a>
      </div>

      <div className=" flex flex-row my-4">
        <a href="#">
          <Image
            className="mx-4 mt-3"
            priority
            src="/assets/icons/psql.png"
            height={150}
            width={150}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4 mt-5"
            priority
            src="/assets/icons/mongo-db.png"
            height={150}
            width={150}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4"
            priority
            src="/assets/icons/redis.png"
            height={70}
            width={70}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4"
            priority
            src="/assets/icons/kafka-logo.png"
            height={130}
            width={130}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4"
            priority
            src="/assets/icons/mysql.png"
            height={100}
            width={150}
          />
        </a>
      </div>

      <div className=" flex flex-row my-4">
        <a href="#">
          <Image
            className="mx-4 hover:"
            priority
            src="/assets/icons/git.png"
            height={100}
            width={100}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4 hover:"
            priority
            src="/assets/icons/jenkins.png"
            height={150}
            width={150}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4"
            priority
            src="/assets/icons/ubuntu.png"
            height={70}
            width={70}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4"
            priority
            src="/assets/icons/nginx.png"
            height={130}
            width={130}
          />
        </a>

        <a href="#">
          <Image
            className="mx-4 mt-4"
            priority
            src="/assets/icons/aws.png"
            height={100}
            width={100}
          />
        </a>
      </div>
      <br />
      <h1 className=" font-semibold text-2xl">History</h1>
      <table>
        <tbody>
          <tr>
            <td className=" w-1/5">2016 - 2019</td>
            <td>
              <p className="font-extralight text-xl text-justify pt-2 pb-2">
                Graduated with a diploma in Telecommunication Engineering from
                the Polytechnic State of Bandung in 2019. My final project,
                titled "Integration of Gas Monitoring System and Sales using web
                application and Android IoT Based," aimed to integrate a
                monitoring system and sales of LPG Gas in Indonesia.
              </p>
            </td>
          </tr>
          <tr>
            <td>2019 - 2020</td>
            <td>
              <p className="font-extralight text-xl text-justify pb-2">
                Worked as a Network Operation Center Engineer in the first phase
                of my career, acquiring skills and knowledge in network
                infrastructure, with a particular focus on VSAT technology in
                the industry.
              </p>
            </td>
          </tr>
          <tr>
            <td>2020 - now</td>
            <td>
              <p className="font-extralight text-xl text-justify">
                Switched careers to become a Software Developer, chose Java as
                the primary programming language to learn because of its
                prevalence in enterprise companies, and secured my first job at
                Code Development Indonesia.{" "}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
