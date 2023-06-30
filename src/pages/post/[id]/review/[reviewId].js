import LayoutWrapper from "@/Layouts";
import { useRouter } from "next/router";
import React from "react";
const ReviewId = () => {
  const router = useRouter();
  const { reviewId } = router.query;
  return (
    <LayoutWrapper>
      <div>Review : {reviewId}</div>
    </LayoutWrapper>
  );
};

export default ReviewId;
