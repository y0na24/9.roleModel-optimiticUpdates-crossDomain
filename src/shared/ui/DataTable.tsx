import { type ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/Table";

export type Column<T extends { id: string | number }> = {
  key: keyof T;
  header: ReactNode;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

export type Columns<T extends { id: string | number }> = Column<T>[];

export type TableConfig<T extends { id: string | number }> = Pick<
  DataTableProps<T>,
  "data" | "columns"
>;

export type DataTableProps<T extends { id: string | number }> = {
  data: T[];
  columns: Column<T>[];
  caption?: ReactNode;
  emptyMessage?: ReactNode;
  limit?: number;
};

export const DataTable = <T extends { id: string | number }>({
  data,
  columns,
  caption,
  emptyMessage = "Нет данных",
  limit,
}: DataTableProps<T>) => {
  const displayData = limit && limit > 0 ? data.slice(0, limit) : data;

  if (displayData.length === 0) {
    return (
      <div className="rounded-md border">
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-muted-foreground"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={String(column.key)}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayData.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => {
                const value = row[column.key as keyof typeof row];
                return (
                  <TableCell key={String(column.key)}>
                    {column.render
                      ? column.render(value, row)
                      : String(value ?? "")}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
