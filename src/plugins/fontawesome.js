import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faPlus as fasPlus } from '@fortawesome/pro-solid-svg-icons';
import { faMinus as fasMinus } from '@fortawesome/pro-solid-svg-icons';
import { faQuestion as fasQuestion } from '@fortawesome/pro-solid-svg-icons';
import { faLongArrowLeft as fasLongArrowLeft } from '@fortawesome/pro-solid-svg-icons';

import { faPiggyBank as falPiggyBank } from '@fortawesome/pro-light-svg-icons';
import { faListUl as falListUl } from '@fortawesome/pro-light-svg-icons';
import { faCog as falCog } from '@fortawesome/pro-light-svg-icons';

library.add(falPiggyBank);
library.add(falListUl);
library.add(falCog);

library.add(fasPlus);
library.add(fasMinus);
library.add(fasQuestion);
library.add(fasLongArrowLeft);

Vue.component('fa', FontAwesomeIcon);