import { configure } from '@kadira/storybook';
import '../client/main.scss';

function loadStories() {
    require('../stories');
    require('../imports/ui/core/elements/stories');
    require('../imports/ui/core/components/stories');
    require('../imports/ui/users/components/stories');
}

configure(loadStories, module);
