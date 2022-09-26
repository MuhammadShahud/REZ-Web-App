import React from "react";
import { Heading, RezNavbar } from "../../Components";
import { ContractsAndPackagesTabs, Footer } from "../../Containers";

const ContractsAndPackages = () => {
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <section className="my-3 ">
        <Heading
          text="CONTRACTS &amp; PACKAGES"
          style={{ alignItems: "center" }}
        />
      </section>

      <section style={{minHeight:'500px'}}>
        <ContractsAndPackagesTabs />
      </section>
      <Footer/>
    </div>
  );
};

export default ContractsAndPackages;
