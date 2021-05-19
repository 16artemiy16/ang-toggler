export const mergeObjects = (
  target: Record<string, any>,
  supplierOrSuppliers: Record<string, any>[] | Record<string, any>
): Record<string, any> => {
  const suppliers = Array.isArray(supplierOrSuppliers) ? [...supplierOrSuppliers] : [supplierOrSuppliers];

  if (!suppliers.length) {
    return target;
  }

  const lastSupplier = suppliers[suppliers.length - 1];
  const merged = Object
    .entries(lastSupplier)
    .reduce((updated, [key, value]) => {
      return { ...updated, [key]: value };
    }, target);

  return mergeObjects(merged, suppliers.slice(0, suppliers.length - 1));
};
