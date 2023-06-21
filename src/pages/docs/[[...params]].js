import LayoutWrapper from "@/Layouts";
import { useRouter } from "next/router";
import React from "react";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length === 3) {
    return (
      <LayoutWrapper>
        <h1>
          Viewing docs for feature {params[0]} and concept {params[2]}
        </h1>
      </LayoutWrapper>
    );
  } else if (params.length === 1) {
    return (
      <LayoutWrapper>
        <h1>Viewing docs for feature {params[0]}</h1>
      </LayoutWrapper>
    );
  }
  return (
    <>
      <LayoutWrapper>
        <div>Docs Home Page</div>
      </LayoutWrapper>
    </>
  );
};

export default Doc;
