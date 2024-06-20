import React from "react";
import Gambar from "../img/wcus.png";
import { ReactComponent as Checklist } from "../img/CheckList.svg";

const Wcus = () => {
  console.log(Gambar);
  return (
    <>
      <div className="flex justify-center gap-10 py-20">
        <div>
          <img
            src={Gambar}
            alt="Gambar"
            className="object-contain w-96 h-auto  mx-auto"
          />
        </div>
        <div className="w-542 flex flex-col gap-3">
          <div className="text-3xl border-l-4 border-buttonCollor pl-4">
            Why Should Grow With Us ?
          </div>
          <div className="text-lg">
            Batara Guru Technology guarantees good quality work and system
            security because we are a trusted and experienced IT consulting
            company in Jakarta, our advantage over others IT Consultant :
          </div>
          <div className="flex gap-2">
            <div>
              <Checklist className="w-8 h-8 mr-4" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold">
                Guaranteed System and Assignment Security
              </div>
              <div>
                The system that we created is more secure and according to your
                needs, so you will feel safe and get the right solution.
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Checklist className="w-8 h-8 mr-4" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold">Penetration Testing</div>
              <div>
                The system that we have made is guaranteed security because it
                goes through penetration testing to find out possible
                vulnerabilities in the system.
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Checklist className="w-8 h-8 mr-4" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold">
                After Sales Service & Maintance
              </div>
              <div>
                We provide service, security and infrastructure guarantees to
                ensure users use the services and products as desired.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wcus;
