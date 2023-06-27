import LayoutWrapper from "@/Layouts";
import React from "react";
const router = useRouter();
const { reviewId } = router.query;
const ReviewId = () => {
  return (
    <LayoutWrapper>
      <div>Review : {reviewId}</div>
    </LayoutWrapper>
  );
};

export default ReviewId;
