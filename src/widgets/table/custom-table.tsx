import { Box, Stack } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import React from "react";

import { Styles } from "@/theme";

export interface CustomColumnTableProps {
    id: string;
    label: string;
    width?: string;
    align?: "left" | "right" | "inherit" | "center" | "justify";
    format?: (value: any) => React.ReactNode;
}

export interface CustomTableProps {
    columns: CustomColumnTableProps[];
    rows: any;
    minWidth: any;
    maxHeight?: any;
}

export const CustomTable: React.FC<CustomTableProps> = ({ columns, rows, minWidth, maxHeight }) => {
    return (
        <Box width={"100%"} sx={{ overflowX: "auto" }} className='custom_scroll'>
            <Stack alignItems='center' width={"100%"} overflow={"auto"} minWidth={minWidth || "fit-content"}>
                {/* header */}
                <Stack direction={"row"} width='100%'>
                    {columns.map((column) => {
                        return (
                            <Stack key={column.id} width={column.width} alignItems='center'>
                                <Styles.Text.CapText>{column.label}</Styles.Text.CapText>
                            </Stack>
                        );
                    })}
                </Stack>
                {/* body */}

                <TableContainer sx={{ maxHeight: maxHeight || 300, width: "100%" }} className='custom_scroll'>
                    <Table stickyHeader aria-label='sticky table' sx={{ overflow: "hidden" }}>
                        <TableBody sx={{ maxWidth: "100%" }}>
                            {rows.map((row: any, j: number) => {
                                return (
                                    <TableRow sx={{ verticalAlign: "top" }} hover role='checkbox' tabIndex={-1} key={j}>
                                        {columns.map((column) => {
                                            const value = row[column.id];

                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    sx={{
                                                        borderRight: "1px solid rgba(255, 255, 255, 0.21)",
                                                        borderBottom: "none",
                                                        padding: "0.7rem 0.5rem",
                                                        maxWidth: column.width,
                                                        width: column.width,
                                                        alignItems: column.align,
                                                    }}
                                                >
                                                    <Styles.Text.MainText
                                                        style={{
                                                            textAlign: column.align,
                                                            // fontSize: "1.3rem",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            maxWidth: "100%",
                                                            wordBreak: "break-word",
                                                        }}
                                                    >
                                                        {column.id === "no" ? j + 1 + "." : null}
                                                        <>{column.format ? column.format(value) : value}</>
                                                        {/* {column.format && typeof value === "number"
                                                            ? column.format(value)
                                                            : value} */}
                                                    </Styles.Text.MainText>
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
