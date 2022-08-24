import { Box, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { Styles } from "@/theme";

export interface CustomColumnTableProps {
    id: any;
    label: string;
    width?: string;
    align?: "left" | "right" | "inherit" | "center" | "justify";
    format?: (value: number) => any;
}

export interface CustomTableProps {
    columns: CustomColumnTableProps[];
    rows: any;
}

export const CustomTable: React.FC<CustomTableProps> = ({ columns, rows }) => {
    return (
        <Box width={"100%"} sx={{ overflowX: "auto" }}>
            <Stack alignItems='center' width={"100%"} overflow={"auto"} minWidth={600 || "fit-content"}>
                {/* header */}
                <Stack direction={"row"} width='100%'>
                    {columns.map((column) => {
                        return (
                            <Stack key={column.id} width={column.width}>
                                <Styles.Text.CapText>{column.label}</Styles.Text.CapText>
                            </Stack>
                        );
                    })}
                </Stack>
                {/* body */}

                <TableContainer sx={{ maxHeight: 200, width: "100%" }}>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableBody>
                            {rows.map((row: any) => {
                                return (
                                    <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    width={column.width}
                                                    sx={{
                                                        borderRight: "1px solid rgba(255, 255, 255, 0.21)",
                                                        borderBottom: "none",
                                                        padding: "0.7rem 0.5rem",
                                                    }}
                                                >
                                                    <h3>
                                                        {column.format && typeof value === "number"
                                                            ? column.format(value)
                                                            : value}
                                                    </h3>
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Box>
    );
};
