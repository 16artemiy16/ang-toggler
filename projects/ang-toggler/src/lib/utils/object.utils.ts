/**
 * Merge objects fields
 *
 * @param target - The object into which other fields will be merged
 * @param supplierOrSuppliers - The object or list of objects which fields will be merged to the target.
 * If it is an array the order matters, so first objects fields have a precedence over subsequent.
 *
 * @example
 * Example with 1 object passed as supplier
 *
 * // returns { a: 'a1', b: 'b2', c: 'c2' }
 * mergeObjects({ a: 'a1', b: 'b1' }, { b: 'b2', c: 'c3' });
 *
 * @example
 * Example with an objects list passed as suppliers
 *
 * // returns { a: 'a1', b: 'b2', c: 'c2', d: 'd3' }
 * mergeObjects({ a: 'a1', b: 'b1', c: 'c1' }, [{ b: 'b2', c: 'c2' }, { c: 'c3', d: 'd3' }]);
 *
 * @returns a new object with contains all fields from target, fields match with suppliers will be overwritten,
 * other fields embraces the target.
 **/
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

export const omit = (obj: Record<string, any>, fields: string[]) => {
  return Object.keys(obj)
    .filter((key) => fields.indexOf(key) < 0)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
};
