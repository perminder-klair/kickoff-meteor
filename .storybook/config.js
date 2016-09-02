import { configure } from '@kadira/storybook';
import '../client/main.scss';

function loadStories() {
    require('../stories');
    require('../imports/ui/core/elements/stories');
}

configure(loadStories, module);
