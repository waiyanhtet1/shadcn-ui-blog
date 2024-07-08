import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const PaginationComponent = ({
  startIndex,
  endIndex,
  setStartIndex,
  setEndIndex,
  pageParcharcter,
  totalLength,
}) => {
  const [pageCount, setPageCount] = useState(1);

  const totalPageCount = Math.ceil(totalLength / pageParcharcter);

  return (
    <div className="mt-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                pageCount === 1 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex - pageParcharcter);
                setEndIndex(endIndex - pageParcharcter);
                setPageCount((prev) => prev - 1);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={
                pageCount === totalPageCount
                  ? "pointer-events-none opacity-50"
                  : undefined
              }
              onClick={() => {
                setStartIndex(startIndex + pageParcharcter); // 0 + 6 = 6
                setEndIndex(endIndex + pageParcharcter); // 6 + 6 = 12
                setPageCount((prev) => prev + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
