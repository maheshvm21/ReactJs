import React from 'react'
import { Card, Table,Button } from "react-bootstrap";


export default function TableComp({ data, tableHeaders, tableBodies }) {
    const getProperty = (obj, prop) => {
        var parts = prop.split(".");

        if (Array.isArray(parts)) {
            var last = parts.length > 1 ? parts.pop() : parts;
            var l = parts.length,
                i = 1,
                current = parts[0];

            while ((obj = obj[current]) && i < l) {
                current = parts[i];
                i++;
            }

            if (typeof obj === "object") {
                return obj[last];
            }
            return obj;
        } else {
            throw "parts is not valid array";
        }
    };
    return (
        <div>
      <Card className="text-center mx-auto p-3" style={{ width: "90%" }}>

            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(data => (
                        <tr key={data.id}>
                            {tableBodies.map(body =>
                                typeof body === "string" ? (
                                    <td key={body}>{getProperty(data, body)}</td>
                                ) : (
                                    <td key={body}>
                                        <Button >Edit</Button>
                                    </td>
                                )
                            )}
                        </tr>
                    ))}

                </tbody>
            </Table>
            </Card>
        </div>
    )
}
