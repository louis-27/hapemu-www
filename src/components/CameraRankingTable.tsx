"use client";

import { MagnifyingGlassIcon, StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Input } from "~/components/ui/input";

type RankingItem = {
  id: number;
  name: string;
  photo?: string;
  zoom?: string;
  bokeh?: string;
  video?: string;
  preview?: string;
  camera: string;
  display: string;
  battery: string;
  dxomarkScore: number;
  image: string;
};

export default function CameraRankingTable({
  ranking,
}: {
  ranking: RankingItem[];
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = ranking.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <main className="flex-1">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex-1 max-w-md">
          <form className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search smartphones..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
          </form>
        </div>
        <div className="mt-8 overflow-auto border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Smartphone</TableHead>
                <TableHead>DXOMark Score</TableHead>
                <TableHead>Photo</TableHead>
                <TableHead>Zoom</TableHead>
                <TableHead>Bokeh</TableHead>
                <TableHead>Video</TableHead>
                <TableHead>Preview</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image ?? "/placeholder.svg"}
                        width={50}
                        height={50}
                        alt={item.name}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <StarIcon className="w-4 h-4 fill-primary" />
                      <span>{item.dxomarkScore.toString()}</span>
                    </div>
                  </TableCell>
                  <TableCell>{item.photo}</TableCell>
                  <TableCell>{item.zoom}</TableCell>
                  <TableCell>{item.bokeh}</TableCell>
                  <TableCell>{item.video}</TableCell>
                  <TableCell>{item.preview}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    currentPage !== 1 && handlePageChange(currentPage - 1)
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(page)}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    currentPage !== totalPages &&
                    handlePageChange(currentPage + 1)
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  );
}
