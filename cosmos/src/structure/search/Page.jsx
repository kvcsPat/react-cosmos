import React from "react";
import useToggle from "../../hooks/useToggle";
import Layout from "../routing/Layout";
import FormComponent from "./FormComponent";
import SearchModal from "./Modal";

export default function SearchPage() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <Layout>
      <FormComponent toggle={toggleIsOn} />
      {isOn && <SearchModal toggle={toggleIsOn} />}
    </Layout>
  );
}
