export type ExportFieldOptions<T> = {
  from?: string;
  format: keyof T | ((obj: T) => string);
};
