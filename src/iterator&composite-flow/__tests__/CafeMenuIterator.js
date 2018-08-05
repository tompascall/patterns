import MenuItem from '../MenuItem';
import CafeMenuIterator from '../CafeMenuIterator';

describe('CafeMenuIterator', () => {
  it('should implement Iterator', () => {
    let value, done;
    const item1 = new MenuItem('name1', 'description1', true, .99);
    const item2 = new MenuItem('name2', 'description2', false, 1.99);
    const cafeMenuIterator = new CafeMenuIterator(new Map([
      [item1.getName(), item1],
      [item2.getName(), item2]
    ]));
    ({ value, done } = cafeMenuIterator.next());
    expect(value).toBe(item1);
    expect(done).toBe(false);
    ({ value, done } = cafeMenuIterator.next());
    expect(value).toBe(item2);
    expect(done).toBe(false);
    ({ value, done } = cafeMenuIterator.next());
    expect(value).toBe(undefined);
    expect(done).toBe(true);
    ({ value, done } = cafeMenuIterator.next());
    expect(value).toBe(undefined);
    expect(done).toBe(true);
  });
});