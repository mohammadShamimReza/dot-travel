import Image from "next/image";
import conpanyLogo1 from "../../../assets/companyLogo1.jpeg";
import conpanyLogo2 from "../../../assets/companyLogo2.png";

import conpanyLogo3 from "../../../assets/companyLogo3.png";

import conpanyLogo4 from "../../../assets/companyLogo4.jpeg";

function Partners() {
  return (
    <div className="flex justify-center align-middle">
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-20">
        <Image
          src={conpanyLogo1}
          height={50}
          width={50}
          alt="host image"
          className="w-24 h-24 rounded-2xl border-2 "
        />
        <Image
          src={conpanyLogo2}
          height={50}
          width={50}
          alt="host image"
          className="w-24 h-24 rounded-2xl border-2 "
        />
        <Image
          src={conpanyLogo3}
          height={50}
          width={50}
          alt="host image"
          className="w-24 h-24 rounded-2xl border-2 "
        />
        <Image
          src={conpanyLogo1}
          height={50}
          width={50}
          alt="host image"
          className="w-24 h-24 rounded-2xl border-2 "
        />
        <Image
          src={conpanyLogo4}
          height={50}
          width={50}
          alt="host image"
          className="w-24 h-24 rounded-2xl border-2 "
        />{" "}
        <Image
          src={conpanyLogo4}
          height={50}
          width={50}
          alt="host image"
          className="w-24 h-24 rounded-2xl border-2 "
        />{" "}
      </div>
    </div>
  );
}

export default Partners;
