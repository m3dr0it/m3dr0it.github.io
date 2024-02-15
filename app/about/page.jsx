const About = () => {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <div className="p-6 w-screen md:w-5/6 mx-auto lg:w-5/12">
      <h1 className=" font-semibold text-2xl">Experiences</h1>
      <table>
        <tbody>
          <tr>
            <td className=" w-1/5">2022 - now</td>
            <td>
              <p className="font-extralight text-xl text-justify pt-2 pb-2">
              PT. Code Development Indonesia - IFG PAY
              </p>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td className=" w-1/5"></td>
            <td>
            <p className="font-extralight text-xl mb-10 text-justify">
              IFG Pay is a payment feature for IFG Life insurance app, addressing user demands for diverse payment options (credit cards, QR codes, virtual accounts, e-wallets). Successfully integrated multiple payment gateways to ensure seamless transactions and high availability.
              </p>
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <td>20219 - 2022</td>
            <td>
              <p className="font-extralight text-xl text-justify pb-2">
              PT. Code Development Indonesia - Fastana Logistic Indonesia
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <p className=" font-extralight text-xl text-justify pb-2">
              Developed an application called Fastlog with aim to assists transportation companies, large-scale distributors, and factories in meet their logistical requirements. The development of Fastlog challenges are fastlog delivery many features such as LCL (Less Container Load), FCL (Full Container Load), multipick, multidrop, tracker, and Cooperation Agreements. These features entail the handling of complex business processes.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <h1 className=" font-semibold text-2xl">Stacks</h1>
      <div className=" flex flex-row my-4">
        <a href="#">
          <img
            className="mx-8 hover:"
            priority
            src="/assets/icons/java.png"
            height={60}
            width={60}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/ts.png"
            height={50}
            width={50}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/springboot.png"
            height={50}
            width={130}
          />
        </a>

        <a href="#">
          <img
            className="mx-8 mt-5"
            priority
            src="/assets/icons/quarkus.png"
            height={180}
            width={130}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/nexttjs.png"
            height={80}
            width={80}
          />
        </a>
      </div>

      <div className=" flex flex-row my-4">
        <a href="#">
          <img
            className="mx-8 mt-3"
            priority
            src="/assets/icons/psql.png"
            height={130}
            width={130}
          />
        </a>

        <a href="#">
          <img
            className="mx-8 mt-5"
            priority
            src="/assets/icons/mongo-db.png"
            height={130}
            width={130}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/redis.png"
            height={50}
            width={50}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/kafka-logo.png"
            height={110}
            width={110}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/mysql.png"
            height={70}
            width={70}
          />
        </a>
      </div>

      <div className=" flex flex-row my-4">
        <a href="#">
          <img
            className="mx-8 hover:"
            priority
            src="/assets/icons/git.png"
            height={80}
            width={80}
          />
        </a>

        <a href="#">
          <img
            className="mx-8 hover:"
            priority
            src="/assets/icons/jenkins.png"
            height={130}
            width={130}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/ubuntu.png"
            height={50}
            width={50}
          />
        </a>

        <a href="#">
          <img
            className="mx-8"
            priority
            src="/assets/icons/nginx.png"
            height={110}
            width={110}
          />
        </a>

        <a href="#">
          <img
            className="mx-8 mt-4"
            priority
            src="/assets/icons/aws.png"
            height={80}
            width={80}
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
