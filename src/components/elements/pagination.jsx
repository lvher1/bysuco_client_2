import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function pagination() {
    return (
        <>
            <div className="pb-[100px] md:pt-[50px] md:pb-[0px] flex justify-center">
                <Stack spacing={2}>
                    <Pagination count={5} sx={{ "& .Mui-selected": { bgcolor: "#fff", fontWeight: "bold" } }} />
                </Stack>
            </div>
        </>
    );
}
