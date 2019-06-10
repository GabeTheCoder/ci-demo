
import search from './search';
import languages from '../languages';

describe('Search', () => {
    it('should contain item if it exists', () => {
        const language = languages[0];
        expect(search(languages, language)).toContain(language);
    });
    it('should return all items if there is no query', () => {
        const language = languages[0];
        expect(search(languages, '')).toContain(language);
    });
});
