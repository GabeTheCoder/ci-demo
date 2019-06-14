
import search from './search';
import languages from '../languages';

describe('Search', () => {
    it('should contain item if it exists', () => {
        expect(search(languages, 'Swift')).toContain('Swift');
    });
    it('should return all items if there is no query', () => {
        expect(search(languages, '').length).toBe(languages.length);
    });
    it('should not care about caps lock', () => {
        expect(search(languages, 'SWIFT')).toContain('Swift');
    });
});
