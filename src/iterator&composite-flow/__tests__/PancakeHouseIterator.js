import MenuItem from '../MenuItem';
import PancakeHouseIterator from '../PancakeHouseIterator';

describe('PancakeHouseIterator', () => {
  it('should implement Iterator', () => {
    let value, done;
    const item1 = new MenuItem('name1', 'description1', true, .99);
    const item2 = new MenuItem('name2', 'description2', false, 1.99);
    const pancakeHouseIterator = new PancakeHouseIterator([item1, item2]);
    ({ value, done } = pancakeHouseIterator.next());
    expect(value).toBe(item1);
    expect(done).toBe(false);
    ({ value, done } = pancakeHouseIterator.next());
    expect(value).toBe(item2);
    expect(done).toBe(false);
    ({ value, done } = pancakeHouseIterator.next());
    expect(value).toBe(undefined);
    expect(done).toBe(true);
    ({ value, done } = pancakeHouseIterator.next());
    expect(value).toBe(undefined);
    expect(done).toBe(true);
  });
});